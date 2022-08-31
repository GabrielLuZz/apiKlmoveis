import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";

const routes = Router();

const sessionRoutes = () => {
  routes.post("", createSessionController);

  return routes;
};

export default sessionRoutes;
