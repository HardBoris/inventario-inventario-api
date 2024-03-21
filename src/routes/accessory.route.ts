import { Router } from "express";
import { accessoryController } from "../controllers";

const accessoryRouter = Router();

accessoryRouter.post(
  "/oikos-stock-api/accessories/register",
  accessoryController.accessoryCreator
);

accessoryRouter.get(
  "/oikos-stock-api/accessories",
  accessoryController.accessoriesList
);

accessoryRouter.get(
  "/oikos-stock-api/accessories/:itemId",
  accessoryController.accessoryLoader
);

accessoryRouter.delete(
  "/oikos-stock-api/accessories/:itemId",
  accessoryController.accessoryDeletor
);

export default accessoryRouter;
