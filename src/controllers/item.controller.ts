import { Request, Response } from "express";
import { itemService } from "../services";

class ItemController {
  itemCreator = async (req: Request, res: Response) => {
    const item = await itemService.itemCreator(req);
    return res.status(201).json(item);
  };

  itemsList = async (req: Request, res: Response) => {
    const { status, items } = await itemService.itemsList(req);
    return res.status(status).json(items);
  };

  itemLoader = async (req: Request, res: Response) => {
    const { status, item } = await itemService.itemLoader(req);
    return res.status(status).json(item);
  };

  itemDeletor = async (req: Request, res: Response) => {
    const { status, message } = await itemService.itemDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ItemController();
