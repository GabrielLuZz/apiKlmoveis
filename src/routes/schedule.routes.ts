import { Router } from "express";
import {
  createScheduleController,
  listPropertySchedulesController,
} from "../controllers/schedule.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const routes = Router();

const scheduleRoutes = () => {
  routes.post("", ensureAuthMiddleware, createScheduleController);
  routes.get(
    "/properties/:id",
    ensureAuthMiddleware,
    ensureIsAdmMiddleware,
    listPropertySchedulesController
  );

  return routes;
};

export default scheduleRoutes;
