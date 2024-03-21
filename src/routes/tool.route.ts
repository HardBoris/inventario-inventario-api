import { Router } from "express";
import { toolController } from "../controllers";

const toolRouter = Router();

toolRouter.post("/tools/register", toolController.toolCreator);

toolRouter.get("/tools", toolController.toolsList);

toolRouter.get("/tools/:itemId", toolController.toolLoader);

toolRouter.delete("/tools/:itemId", toolController.toolDeletor);

export default toolRouter;
