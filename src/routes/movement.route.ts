import { Router } from "express";
import { moveController } from "../controllers";

const moveRouter = Router();

moveRouter.post("/oikos-stock-api/moves/register", moveController.moveCreator);

moveRouter.get("/oikos-stock-api/moves", moveController.movesList);

moveRouter.get("/oikos-stock-api/moves/:moveId", moveController.moveLoader);

moveRouter.delete("/oikos-stock-api/moves/:moveId", moveController.moveDeletor);

export default moveRouter;
