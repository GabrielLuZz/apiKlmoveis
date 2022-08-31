import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

const ensureIsAdmMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    throw new AppError("You don't have authorization", 403);
  }

  next();
};

export default ensureIsAdmMiddleware;
