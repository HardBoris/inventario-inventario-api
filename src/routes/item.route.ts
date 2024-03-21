import { Router } from "express";
import { itemController } from "../controllers";

const itemRouter = Router();

itemRouter.post("/oikos-stock-api/items/register", itemController.itemCreator);

itemRouter.get("/oikos-stock-api/items", itemController.itemsList);

itemRouter.get("/oikos-stock-api/items/:itemId", itemController.itemLoader);

itemRouter.delete("/oikos-stock-api/items/:itemId", itemController.itemDeletor);

export default itemRouter;
