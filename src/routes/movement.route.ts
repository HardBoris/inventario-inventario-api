import { Router } from "express";
import { moveController } from "../controllers";

const moveRouter = Router();

moveRouter.post("/moves/register", moveController.moveCreator);

moveRouter.get("/moves", moveController.movesList);

moveRouter.get("/moves/:moveId", moveController.moveLoader);

moveRouter.delete("/moves/:moveId", moveController.moveDeletor);

export default moveRouter;
