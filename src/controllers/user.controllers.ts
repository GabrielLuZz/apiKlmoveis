import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users/index";
import createUserService from "../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import listUsersService from "../services/users/listUsers.service";
import deleteUserService from "../services/users/deleteUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(instanceToPlain(newUser));
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.json(users);
};

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteUserService(id);

  res.status(204).json();
};

export { createUserController, listUsersController, deleteUserController };
