import { Router } from "express";
import { materialController } from "../controllers";

const materialRouter = Router();

materialRouter.post(
  "/inventario/materials/register",
  materialController.materialCreator
);

materialRouter.get("/inventario/materials", materialController.materialsList);

materialRouter.get(
  "/inventario/materials/:itemId",
  materialController.materialLoader
);

materialRouter.delete(
  "/inventario/materials/:itemId",
  materialController.materialDeletor
);

export default materialRouter;
