import { Express } from "express";
import itemRouter from "./item.route";
import materialRouter from "./material.route";
import accessoryRouter from "./accessory.route";
import midiaRouter from "./midia.route";
import toolRouter from "./tool.route";
import moveRouter from "./movement.route";

const registerRouters = (app: Express): void => {
  app.use(itemRouter);
  app.use(materialRouter);
  app.use(accessoryRouter);
  app.use(midiaRouter);
  app.use(toolRouter);
  app.use(moveRouter);
};

export default registerRouters;
