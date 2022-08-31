import { Router } from "express";
import {
  createScheduleController,
  listPropertySchedulesController,
} from "../controllers/schedule.controllers";

const routes = Router();

const scheduleRoutes = () => {
  routes.post("", createScheduleController);
  routes.get("/properties/:id", listPropertySchedulesController);

  return routes;
};

export default scheduleRoutes;
