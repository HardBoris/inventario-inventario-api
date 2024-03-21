import { Router } from "express";
import { materialController } from "../controllers";

const materialRouter = Router();

materialRouter.post("/materials/register", materialController.materialCreator);

materialRouter.get("/materials", materialController.materialsList);

materialRouter.get("/materials/:itemId", materialController.materialLoader);

materialRouter.delete("/materials/:itemId", materialController.materialDeletor);

export default materialRouter;
