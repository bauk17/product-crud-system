import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.MYSQL_DB as string,
  username: process.env.MYSQL_USER as string,
  password: process.env.MYSQL_PASSWORD as string,
  dialect: "mysql",
  dialectModule: require("mysql2"),
  port: parseInt(process.env.MYSQL_PORT as string),
});
