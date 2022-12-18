import { DataSource } from "typeorm";
import TypeOrmRepository from "../repositories/TypeOrmRepository";
import Continent from "../models/Continent";
import ContinentData from "../data/continents.json";

export default class ContinentDataSeeder {
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

  upsertData = async () => {
    const count = await this.repo.count();
    let countUpserts = 0;
    if (count == 0) {
      for (let c of ContinentData) {
        const existingContinent = await this.repo.findOneWhere({
          continentId: c.continentId,
        });
        if (!existingContinent) {
          let cont = Object.assign(new Continent(), c);
          await this.repo.add(cont);
          countUpserts = countUpserts + 1;
        }
      }
      return countUpserts;
    } else {
      return 0;
    }
  };
}
