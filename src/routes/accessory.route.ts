import { Router } from "express";
import { accessoryController } from "../controllers";

const accessoryRouter = Router();

accessoryRouter.post(
  "/accessories/register",
  accessoryController.accessoryCreator
);

accessoryRouter.get("/accessories", accessoryController.accessoriesList);

accessoryRouter.get(
  "/accessories/:itemId",
  accessoryController.accessoryLoader
);

accessoryRouter.delete(
  "/accessories/:itemId",
  accessoryController.accessoryDeletor
);

export default accessoryRouter;
