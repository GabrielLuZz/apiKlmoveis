import { Router } from "express";
import { createAddressController } from "../controllers/address.controllers";

const routes = Router();

const addressRoutes = () => {
  routes.post("", createAddressController);

  return routes;
};

export default addressRoutes;
