import { Request } from "express";
import { toolRepository } from "../repositories";
import { Tool } from "../entities";
import { ErrorHandler } from "../errors";

class ToolService {
  toolCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const tool = await toolRepository.save({ ...body });
    return tool;
  };

  toolsList = async (req: Request) => {
    const tools: Tool[] = await toolRepository.all();
    return {
      status: 200,
      tools: tools,
    };
  };

  toolLoader = async (req: Request) => {
    const tool: Tool = await toolRepository.findOne({
      itemId: req.params.itemId,
    });
    return {
      status: 200,
      tool: tool,
    };
  };

  toolDeletor = async (req: Request) => {
    const tool: Tool = await toolRepository.findOne({
      itemId: req.params.itemId,
    });

    if (!tool) {
      throw new ErrorHandler(404, "Tool not Found");
    }

    await toolRepository.delete(req.params.itemId);

    return {
      status: 200,
      message: "Tool Deleted",
    };
  };
}

export default new ToolService();
