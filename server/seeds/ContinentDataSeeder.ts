import { Connection } from 'typeorm';
import Continent from '../models/Continent';
import ContinentData from '../data/continents.json';
import TypeOrmRepository from '../repositories/TypeOrmRepository';

export default class ContinentDataSeeder {
	dbConn: Connection=null;
	repo: TypeOrmRepository<Continent>=null;

	constructor(dbConn: Connection) {
		if (dbConn) {
			this.dbConn = dbConn;
		}
		if (dbConn && this.repo ===null) {
			this.repo = new TypeOrmRepository(this.dbConn, Continent);
		}
	}

	upsertData = async () => {
		const count = await this.repo.count();
		let countUpserts = 0;
		if(count == 0){		
			for(let c of ContinentData){
				let cont = Object.assign(new Continent(), c);
				await this.repo.add(cont);
				countUpserts++;	
			}	
			return countUpserts;
		} else{
			return 0;
		}
  };
}
