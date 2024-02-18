import { Request, Response } from "express";
import { toolService } from "../services";

class ToolController {
  toolCreator = async (req: Request, res: Response) => {
    const tool = await toolService.toolCreator(req);
    return res.status(201).json(tool);
  };

  toolsList = async (req: Request, res: Response) => {
    const { status, tools } = await toolService.toolsList(req);
    return res.status(status).json(tools);
  };

  toolLoader = async (req: Request, res: Response) => {
    const { status, tool } = await toolService.toolLoader(req);
    return res.status(status).json(tool);
  };

  toolDeletor = async (req: Request, res: Response) => {
    const { status, message } = await toolService.toolDeletor(req);
    return res.status(status).json(message);
  };
}

export default new ToolController();
