import { Router } from "express";
import { toolController } from "../controllers";

const toolRouter = Router();

toolRouter.post("/inventario/tools/register", toolController.toolCreator);

toolRouter.get("/inventario/tools", toolController.toolsList);

toolRouter.get("/inventario/tools/:toolId", toolController.toolLoader);

toolRouter.delete("/inventario/tools/:toolId", toolController.toolDeletor);

export default toolRouter;
