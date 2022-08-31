import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
} from "../controllers/user.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const routes = Router();

const userRoutes = () => {
  routes.post("", createUserController);
  routes.get(
    "",
    ensureAuthMiddleware,
    ensureIsAdmMiddleware,
    listUsersController
  );
  routes.delete(
    "/:id",
    ensureAuthMiddleware,
    ensureIsAdmMiddleware,
    deleteUserController
  );

  return routes;
};

export default userRoutes;
