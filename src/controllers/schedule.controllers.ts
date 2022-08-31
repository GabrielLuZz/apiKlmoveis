import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import listPropertySchedulesService from "../services/schedules/listPropertySchedules.service";

const createScheduleController = async (req: Request, res: Response) => {
  const userId = req.user.id;

  const { date, hour, propertyId } = req.body;

  const schedule = await createScheduleService({
    userId,
    date,
    hour,
    propertyId,
  });

  return res.status(201).json({ message: "Schedule created" });
};

const listPropertySchedulesController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const schedules = await listPropertySchedulesService(id);

  return res.json(schedules);
};

export { createScheduleController, listPropertySchedulesController };
