import { createConnection, Connection } from 'typeorm';
import ormconfig from './ormconfig';

export default class Database {
  dbConn: Connection;

  constructor(dbConn: Connection) {
    if (dbConn) {
      this.dbConn = dbConn;
    }
  }

  initConnection = (): Promise<Connection> => {
    if (!this.dbConn) {
      return createConnection(ormconfig);
    } else {
      return Promise.resolve(this.dbConn);
    }
  };
}
