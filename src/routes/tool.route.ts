import { Router } from "express";
import { toolController } from "../controllers";

const toolRouter = Router();

toolRouter.post("/inventario/tools/register", toolController.toolCreator);

toolRouter.get("/inventario/tools", toolController.toolsList);

toolRouter.get("/inventario/tools/:itemId", toolController.toolLoader);

toolRouter.delete("/inventario/tools/:itemId", toolController.toolDeletor);

export default toolRouter;
