import { Router } from "express";
import { itemController } from "../controllers";

const itemRouter = Router();

itemRouter.post("/inventario/items/register", itemController.itemCreator);

itemRouter.get("/inventario/items", itemController.itemsList);

itemRouter.get("/inventario/items/:itemId", itemController.itemLoader);

itemRouter.delete("/inventario/items/:itemId", itemController.itemDeletor);

export default itemRouter;
