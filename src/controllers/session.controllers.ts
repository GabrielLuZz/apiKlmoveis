import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import createSessionService from "../services/session/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const userData: IUserLogin = req.body;

  const token = await createSessionService(userData);

  return res.json({ token });
};

export { createSessionController };
