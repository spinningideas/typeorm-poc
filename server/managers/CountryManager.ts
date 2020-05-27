import { Connection } from 'typeorm';
import Country from '../models/Country';
import TypeOrmRepository from '../repositories/TypeOrmRepository';

export default class CountryManager {
  dbConn: Connection = null;
  repo: TypeOrmRepository<Country> = null;

  constructor(dbConn: Connection) {
    if (dbConn) {
      this.dbConn = dbConn;
    }
    if (dbConn && this.repo === null) {
      this.repo = new TypeOrmRepository<Country>(this.dbConn, Country);
    }
  }

  findByContinentCodePaged = async (
    continentCode: string,
    pageNumber: number,
    pageSize: number,
    orderBy: string,
    orderDesc: boolean
  ) => {
    return this.repo.findWherePagedSorted({ continentCode: continentCode }, pageNumber, pageSize, orderBy, orderDesc);
  };

  getByCountryCode = async (countryCode: string) => {
    return this.repo.findOneWhere({ countryCode: countryCode });
  };
}
