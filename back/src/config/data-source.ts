import { DataSource } from "typeorm";
import { User, Credential, Appointment } from "../entities/index";
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  // dropSchema: true,
  synchronize: true,
  logging: ["error"],
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
});
