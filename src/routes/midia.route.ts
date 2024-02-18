import { Router } from "express";
import { midiaController } from "../controllers";

const midiaRouter = Router();

midiaRouter.post("/inventario/midias/register", midiaController.midiaCreator);

midiaRouter.get("/inventario/midias", midiaController.midiasList);

midiaRouter.get("/inventario/midias/:midiaId", midiaController.midiaLoader);

midiaRouter.delete("/inventario/midias/:midiaId", midiaController.midiaDeletor);

export default midiaRouter;
