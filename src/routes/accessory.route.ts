import { Router } from "express";
import { accessoryController } from "../controllers";

const accessoryRouter = Router();

accessoryRouter.post(
  "/inventario/accessories/register",
  accessoryController.accessoryCreator
);

accessoryRouter.get(
  "/inventario/accessories",
  accessoryController.accessoriesList
);

accessoryRouter.get(
  "/inventario/accessories/:accessoryId",
  accessoryController.accessoryLoader
);

accessoryRouter.delete(
  "/inventario/accessories/:accessoryId",
  accessoryController.accessoryDeletor
);

export default accessoryRouter;
