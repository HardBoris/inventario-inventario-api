import { Router } from "express";
import { toolController } from "../controllers";

const toolRouter = Router();

toolRouter.post("/oikos-stock-api/tools/register", toolController.toolCreator);

toolRouter.get("/oikos-stock-api/tools", toolController.toolsList);

toolRouter.get("/oikos-stock-api/tools/:itemId", toolController.toolLoader);

toolRouter.delete("/oikos-stock-api/tools/:itemId", toolController.toolDeletor);

export default toolRouter;
