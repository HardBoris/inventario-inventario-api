import { Request } from "express";
import { moveRepository } from "../repositories";
import { Movement } from "../entities";
import { ErrorHandler } from "../errors";

class MovementService {
  moveCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const move = await moveRepository.save({ ...body });
    return move;
  };

  movesList = async (req: Request) => {
    const moves: Movement[] = await moveRepository.all();
    return {
      status: 200,
      moves: moves,
    };
  };

  moveLoader = async (req: Request) => {
    const move: Movement = await moveRepository.findOne({
      moveId: req.params.moveId,
    });
    return {
      status: 200,
      move: move,
    };
  };

  moveDeletor = async (req: Request) => {
    const move: Movement = await moveRepository.findOne({
      moveId: req.params.moveId,
    });

    if (!move) {
      throw new ErrorHandler(404, "Movement not Found");
    }

    await moveRepository.delete(req.params.moveId);

    return {
      status: 200,
      message: "Movement Deleted",
    };
  };
}

export default new MovementService();
