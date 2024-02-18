import { Request } from "express";
import { itemRepository } from "../repositories";
import { Item } from "../entities";
import { ErrorHandler } from "../errors";

class ItemService {
  itemCreator = async (req: Request): Promise<any> => {
    const body = req.body;
    const item = await itemRepository.save({ ...body });
    return item;
  };

  itemsList = async (req: Request) => {
    const items: Item[] = await itemRepository.all();
    return {
      status: 200,
      items: items,
    };
  };

  itemLoader = async (req: Request) => {
    const item: Item = await itemRepository.findOne({
      itemId: req.params.itemId,
    });
    return {
      status: 200,
      item: item,
    };
  };

  itemDeletor = async (req: Request) => {
    const item: Item = await itemRepository.findOne({
      itemId: req.params.itemId,
    });

    if (!item) {
      throw new ErrorHandler(404, "Item not Found");
    }

    await itemRepository.delete(req.params.itemId);

    return {
      status: 200,
      message: "Item Deleted",
    };
  };
}

export default new ItemService();
