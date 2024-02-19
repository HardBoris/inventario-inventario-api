import { Request } from "express";
import { midiaRepository } from "../repositories";
import { Midia } from "../entities";
import { ErrorHandler } from "../errors";

class MidiaService {
  midiaCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const midia = await midiaRepository.save({ ...body });
    return midia;
  };

  midiasList = async (req: Request) => {
    const midias: Midia[] = await midiaRepository.all();
    return {
      status: 200,
      midias: midias,
    };
  };

  midiaLoader = async (req: Request) => {
    const midia: Midia = await midiaRepository.findOne({
      itemId: req.params.itemId,
    });
    return {
      status: 200,
      midia: midia,
    };
  };

  midiaDeletor = async (req: Request) => {
    const midia: Midia = await midiaRepository.findOne({
      itemId: req.params.itemId,
    });

    if (!midia) {
      throw new ErrorHandler(404, "Midia not Found");
    }

    await midiaRepository.delete(req.params.itemId);

    return {
      status: 200,
      message: "Midia Deleted",
    };
  };
}

export default new MidiaService();
