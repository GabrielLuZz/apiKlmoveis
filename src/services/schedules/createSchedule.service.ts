import AppDataSource from "../../data-source";
import { SchedulesUsersProperties } from "../../entities/schedule_user_property.entity";
import { User } from "../../entities/user.entity";
import { Property } from "../../entities/property.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import AppError from "../../errors/appError";

const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );

  const realDate = new Date(date);

  if (!(realDate.getDay() >= 1 && realDate.getDay() <= 5)) {
    // console.log("entrei no dia", { date, hour });
    throw new AppError("Must be a commercial day");
  }

  if (+hour.split(":")[0] > 18 || +hour.split(":")[0] < 8) {
    // console.log("entrei no horário", { date, hour });
    throw new AppError("Must be a commercial schedule");
  }

  const propertyRepository = AppDataSource.getRepository(Property);
  const userRepository = AppDataSource.getRepository(User);

  const property = await propertyRepository.findOneBy({ id: propertyId });

  if (!property) {
    throw new AppError("Property not found", 404);
  }

  const alreadyExists = await scheduleRepository.findOne({
    where: {
      date: date.split("/").join("-"),
      hour,
      property: property,
    },
  });

  //   console.log(hour, date);
  //   console.log(alreadyExists);
  //   console.log(await scheduleRepository.find());

  //   console.log(realDate);

  if (alreadyExists) {
    throw new AppError("Schedule is already marked");
  }

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const schedule = scheduleRepository.create({
    date: date.split("/").join("-"),
    hour,
    property,
    user,
  });

  await scheduleRepository.save(schedule);
};

// date: "2022/08/12",
//     hour: "10:30",

export default createScheduleService;
