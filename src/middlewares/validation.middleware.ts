import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validationMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let data;

      data = req.body;

      if (req.body.address) {
        data = req.body.address;
      }

      await schema.validate(data);

      next();
    } catch (err: any) {
      return res.status(400).json({
        message: err.errors?.join(", "),
      });
    }
  };

export default validationMiddleware;
