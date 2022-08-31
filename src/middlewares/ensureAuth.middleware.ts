import { Request, Response, NextFunction } from "express";
import AppError from "../errors/appError";
import normalizeToken from "../utils/normalizeToken";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = normalizeToken(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ message: "Missing Token" });
  }

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
        });
      }

      req.user = {
        isAdm: decoded.isAdm,
        id: decoded.sub,
      };

      next();
    }
  );
};

export default ensureAuthMiddleware;
