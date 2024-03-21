import { Router } from "express";
import { midiaController } from "../controllers";

const midiaRouter = Router();

midiaRouter.post("/midias/register", midiaController.midiaCreator);

midiaRouter.get("/midias", midiaController.midiasList);

midiaRouter.get("/midias/:itemId", midiaController.midiaLoader);

midiaRouter.delete("/midias/:itemId", midiaController.midiaDeletor);

export default midiaRouter;
