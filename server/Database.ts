import {createConnection, Connection} from "typeorm";
import Continent from "./models/Continent";
import Country from "./models/Country";

export default class Database  {
	dbConn:Connection;

	constructor(dbConn: Connection){
		if(dbConn){
			this.dbConn = dbConn;
		}		
	}	
	
	initConnection =():Promise<Connection>=> {
		if(!this.dbConn){
			return createConnection({
				type: "postgres",
				host: "localhost",
				port: 5432,
				username: "postgres",
				password: "P0stGr3s",
				database: "orm_poc_typeorm",
				entities: [
					Continent, Country
					//__dirname + "\\models\\*.ts"
				],
				synchronize: true,
				logging: false
			}).then(async (connection) => {
					this.dbConn = connection;
					return this.dbConn;
			}).catch(err => {
				console.log(err);
				return Promise.reject(new Error(err))
			});
		} else {
			return Promise.resolve(this.dbConn);
		}
	}
}