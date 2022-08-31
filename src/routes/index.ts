import { Express } from "express";
import addressRoutes from "./address.routes";
import categoryRoutes from "./category.routes";
import propertyRoutes from "./property.routes";
import scheduleRoutes from "./schedule.routes";
import sessionRoutes from "./session.routes";
import userRoutes from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/properties", propertyRoutes());
  app.use("/categories", categoryRoutes());
  app.use("/addresses", addressRoutes());
  app.use("/login", sessionRoutes());
  app.use("/schedules", scheduleRoutes());
};

export default appRoutes;
