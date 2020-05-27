import { Connection } from 'typeorm';
import Continent from '../models/Continent';
import TypeOrmRepository from '../repositories/TypeOrmRepository';

export default class ContinentManager {
  dbConn: Connection = null;
  repo: TypeOrmRepository<Continent> = null;

  constructor(dbConn: Connection) {
    if (dbConn) {
      this.dbConn = dbConn;
    }
    if (dbConn && this.repo === null) {
      this.repo = new TypeOrmRepository<Continent>(this.dbConn, Continent);
    }
  }

  findAll = async () => {
    return this.repo.findAll();
  };
}
