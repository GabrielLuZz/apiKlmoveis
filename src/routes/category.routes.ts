import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listCategoryPropertiesController,
} from "../controllers/category.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const routes = Router();

const categoryRoutes = () => {
  routes.post(
    "",
    ensureAuthMiddleware,
    ensureIsAdmMiddleware,
    createCategoryController
  );
  routes.get("/:id/properties", listCategoryPropertiesController);
  routes.get("", listCategoriesController);
  return routes;
};

export default categoryRoutes;
