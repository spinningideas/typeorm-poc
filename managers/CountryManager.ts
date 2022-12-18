import { DataSource } from "typeorm";
import Country from "../models/Country";
import TypeOrmRepository from "../repositories/TypeOrmRepository";

export default class CountryManager {
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

  findByContinentCodePaged = async (
    continentCode: string,
    pageNumber: number,
    pageSize: number,
    orderBy: string,
    orderDesc: boolean
  ) => {
    return this.repo.findWherePagedSorted(
      { continentCode: continentCode },
      pageNumber,
      pageSize,
      orderBy,
      orderDesc
    );
  };

  getByCountryCode = async (countryCode: string) => {
    return this.repo.findOneWhere({ countryCode: countryCode });
  };
}
