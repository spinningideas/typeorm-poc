import { DataSource } from "typeorm";
import TypeOrmRepository from "../repositories/TypeOrmRepository";
import Country from "../models/Country";
import CountryData from "../data/countries.json";

export default class CountryDataSeeder {
  dataSource: DataSource = null;
  repo: TypeOrmRepository<Country> = null;

  constructor(dataSource: DataSource) {
    if (dataSource) {
      this.dataSource = dataSource;
    }
    if (dataSource && this.repo === null) {
      this.repo = new TypeOrmRepository<Country>(this.dataSource, Country);
    }
  }

  upsertData = async () => {
    const count = await this.repo.count();
    let countUpserts = 0;
    if (count == 0) {
      for (let c of CountryData) {
        const existingCountry = await this.repo.findOneWhere({
          countryId: c.countryId,
        });
        if (!existingCountry) {
          let country = Object.assign(new Country(), c);
          await this.repo.add(country);
          countUpserts = countUpserts + 1;
        }
      }
      return countUpserts;
    } else {
      return 0;
    }
  };
}
