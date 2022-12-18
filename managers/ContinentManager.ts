import { DataSource } from "typeorm";
import Continent from "../models/Continent";
import TypeOrmRepository from "../repositories/TypeOrmRepository";

export default class ContinentManager {
  dataSource: DataSource = null;
  repo: TypeOrmRepository<Continent> = null;

  constructor(dataSource: DataSource) {
    if (dataSource) {
      this.dataSource = dataSource;
    }
    if (dataSource && this.repo === null) {
      this.repo = new TypeOrmRepository<Continent>(this.dataSource, Continent);
    }
  }

  findAll = async () => {
    return this.repo.findAll();
  };
}
