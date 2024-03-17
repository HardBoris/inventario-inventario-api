import { Router } from "express";
import { moveController } from "../controllers";

const moveRouter = Router();

moveRouter.post("/inventario/moves/register", moveController.moveCreator);

moveRouter.get("/inventario/moves", moveController.movesList);

moveRouter.get("/inventario/moves/:moveId", moveController.moveLoader);

moveRouter.delete("/inventario/moves/:moveId", moveController.moveDeletor);

export default moveRouter;
