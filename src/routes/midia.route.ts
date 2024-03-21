import { Router } from "express";
import { midiaController } from "../controllers";

const midiaRouter = Router();

midiaRouter.post(
  "/oikos-stock-api/midias/register",
  midiaController.midiaCreator
);

midiaRouter.get("/oikos-stock-api/midias", midiaController.midiasList);

midiaRouter.get("/oikos-stock-api/midias/:itemId", midiaController.midiaLoader);

midiaRouter.delete(
  "/oikos-stock-api/midias/:itemId",
  midiaController.midiaDeletor
);

export default midiaRouter;
