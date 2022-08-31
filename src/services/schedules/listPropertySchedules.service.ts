import AppDataSource from "../../data-source";
import { SchedulesUsersProperties } from "../../entities/schedule_user_property.entity";
import { Property } from "../../entities/property.entity";
import AppError from "../../errors/appError";

const listPropertySchedulesService = async (id: string) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const propertyRepository = AppDataSource.getRepository(Property);

  const oldProperty = await propertyRepository.findOneBy({ id });

  if (!oldProperty) {
    throw new AppError("Property not found", 404);
  }

  const property = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedules: true,
    },
  });

  return property;
};

export default listPropertySchedulesService;
