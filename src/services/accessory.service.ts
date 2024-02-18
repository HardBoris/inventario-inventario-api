import { Request } from "express";
import { accessoryRepository } from "../repositories";
import { Accessory } from "../entities";
import { ErrorHandler } from "../errors";

class AccessoryService {
  accessoryCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const accessory = await accessoryRepository.save({ ...body });
    return accessory;
  };

  accessorysList = async (req: Request) => {
    const accessorys: Accessory[] = await accessoryRepository.all();
    return {
      status: 200,
      accessorys: accessorys,
    };
  };

  accessoryLoader = async (req: Request) => {
    const accessory: Accessory = await accessoryRepository.findOne({
      accessoryId: req.params.accessoryId,
    });
    return {
      status: 200,
      accessory: accessory,
    };
  };

  accessoryDeletor = async (req: Request) => {
    const accessory: Accessory = await accessoryRepository.findOne({
      accessoryId: req.params.accessoryId,
    });

    if (!accessory) {
      throw new ErrorHandler(404, "Accessory not Found");
    }

    await accessoryRepository.delete(req.params.accessoryId);

    return {
      status: 200,
      message: "Accessory Deleted",
    };
  };
}

export default new AccessoryService();
