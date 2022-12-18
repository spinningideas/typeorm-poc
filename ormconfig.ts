import { DataSourceOptions } from "typeorm";

// NOTE: The password and info here SHOULD come from .env files and be
// securely managed using best practices...this is POC and creds are here for clarity ONLY
const ormconfig: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "typeorm_poc_db",
  username: "typeorm_poc_user",
  password: "SET_YOUR_PASSWORD",
  synchronize: false,
  logging: false,
  entities: [__dirname + "/models/*.ts"],
  migrations: ["migrations/*.ts"],
};

export default ormconfig;
