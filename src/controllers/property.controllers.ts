import { Request, Response } from "express";
import createPropertyService from "../services/properties/createProperty.service";
import listPropertiesService from "../services/properties/listProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
  const propertyData = req.body;

  const newProperty = await createPropertyService(propertyData);

  return res.status(201).json(newProperty);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();

  return res.json(properties);
};

export { createPropertyController, listPropertiesController };
