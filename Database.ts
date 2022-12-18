import { DataSource } from "typeorm";
import ormconfig from "./ormconfig";

// Wrapper around the TypeORM DataSource renamed to avoid collision
// and make terminology more general in this POC
const Database = new DataSource(ormconfig);

export default Database;
