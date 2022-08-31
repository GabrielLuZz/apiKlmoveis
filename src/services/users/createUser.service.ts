import { hash } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import { IUserRequest } from "../../interfaces/users";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (user) {
    throw new AppError("User already exists");
  }

  const hashedPassword = await hash(password, 10);

  const newUser = userRepository.create({
    name,
    email,
    password: hashedPassword,
    isAdm,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
