import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  // ssl: { rejectUnauthorized: false },
  entities: [path.join(__dirname, `./entities/**/*.{js,ts}`)],
  migrations: [path.join(__dirname, `./migrations/**/*.{js,ts}`)],
});
