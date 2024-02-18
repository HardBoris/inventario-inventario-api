import { Request, Response } from "express";
import { materialService } from "../services";

class MaterialController {
  materialCreator = async (req: Request, res: Response) => {
    const material = await materialService.materialCreator(req);
    return res.status(201).json(material);
  };

  materialsList = async (req: Request, res: Response) => {
    const { status, materials } = await materialService.materialsList(req);
    return res.status(status).json(materials);
  };

  materialLoader = async (req: Request, res: Response) => {
    const { status, material } = await materialService.materialLoader(req);
    return res.status(status).json(material);
  };

  materialDeletor = async (req: Request, res: Response) => {
    const { status, message } = await materialService.materialDeletor(req);
    return res.status(status).json(message);
  };
}

export default new MaterialController();
