import { Router } from "express";
import { midiaController } from "../controllers";

const midiaRouter = Router();

midiaRouter.post("/inventario/midias/register", midiaController.midiaCreator);

midiaRouter.get("/inventario/midias", midiaController.midiasList);

midiaRouter.get("/inventario/midias/:itemId", midiaController.midiaLoader);

midiaRouter.delete("/inventario/midias/:itemId", midiaController.midiaDeletor);

export default midiaRouter;
