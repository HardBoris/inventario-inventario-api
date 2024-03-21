import { Router } from "express";
import { itemController } from "../controllers";

const itemRouter = Router();

itemRouter.post("/items/register", itemController.itemCreator);

itemRouter.get("/items", itemController.itemsList);

itemRouter.get("/items/:itemId", itemController.itemLoader);

itemRouter.delete("/items/:itemId", itemController.itemDeletor);

export default itemRouter;
