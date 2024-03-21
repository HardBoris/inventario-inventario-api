import { Router } from "express";
import { materialController } from "../controllers";

const materialRouter = Router();

materialRouter.post(
  "/oikos-stock-api/materials/register",
  materialController.materialCreator
);

materialRouter.get(
  "/oikos-stock-api/materials",
  materialController.materialsList
);

materialRouter.get(
  "/oikos-stock-api/materials/:itemId",
  materialController.materialLoader
);

materialRouter.delete(
  "/oikos-stock-api/materials/:itemId",
  materialController.materialDeletor
);

export default materialRouter;
