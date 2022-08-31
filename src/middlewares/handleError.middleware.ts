import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";

const handleErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    message: err,
  });
};

export default handleErrorMiddleware;
