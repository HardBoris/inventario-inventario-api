import { Request, Response } from "express";
import { accessoryService } from "../services";

class AccessoryController {
  accessoryCreator = async (req: Request, res: Response) => {
    const accessory = await accessoryService.accessoryCreator(req);
    return res.status(201).json(accessory);
  };

  accessoriesList = async (req: Request, res: Response) => {
    const { status, accessories } = await accessoryService.accessoriesList(req);
    return res.status(status).json(accessories);
  };

  accessoryLoader = async (req: Request, res: Response) => {
    const { status, accessory } = await accessoryService.accessoryLoader(req);
    return res.status(status).json(accessory);
  };

  accessoryDeletor = async (req: Request, res: Response) => {
    const { status, message } = await accessoryService.accessoryDeletor(req);
    return res.status(status).json(message);
  };
}

export default new AccessoryController();
