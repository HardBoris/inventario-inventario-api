import { Request, Response } from "express";
import { moveService } from "../services";

class ItemController {
  moveCreator = async (req: Request, res: Response) => {
    const move = await moveService.moveCreator(req);
    return res.status(201).json(move);
  };

  movesList = async (req: Request, res: Response) => {
    const { status, moves } = await moveService.movesList(req);
    return res.status(status).json(moves);
  };

  moveLoader = async (req: Request, res: Response) => {
    const { status, move } = await moveService.moveLoader(req);
    return res.status(status).json(move);
  };

  moveDeletor = async (req: Request, res: Response) => {
    const { status, message } = await moveService.moveDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ItemController();
