import { Connection } from 'typeorm';
import Country from '../models/Country';
import CountryData from '../data/countries.json';
import TypeOrmRepository from '../repositories/TypeOrmRepository';

export default class CountryDataSeeder {
	dbConn: Connection=null;
	repo: TypeOrmRepository<Country>=null;

	constructor(dbConn: Connection) {
		if (dbConn) {
			this.dbConn = dbConn;
		}
		if (dbConn && this.repo ===null) {
			this.repo = new TypeOrmRepository<Country>(this.dbConn, Country);
		}
	}

	upsertData = async () => {
		const count = await this.repo.count();
		let countUpserts = 0;
		if(count == 0){		
			for(let c of CountryData){
				let cont = Object.assign(new Country(), c);
				await this.repo.add(cont);
				countUpserts++;	
			}	
			return countUpserts;
		} else{
			return 0;
		}
  };
}
