import { Router } from "express";
import {
  createPropertyController,
  listPropertiesController,
} from "../controllers/property.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import { adressSchema } from "../schemas/properties.schemas";

const routes = Router();

const propertyRoutes = () => {
  routes.post(
    "",
    ensureAuthMiddleware,
    ensureIsAdmMiddleware,
    validationMiddleware(adressSchema),
    createPropertyController
  );
  routes.get("", listPropertiesController);

  return routes;
};

export default propertyRoutes;
