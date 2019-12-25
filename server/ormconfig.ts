import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'P0stGr3s',
	database: 'orm_poc_typeorm',
	synchronize: false,
	logging: false,
  entities: [	
    __dirname + '/models/*.ts',
	],
	migrations: ["migrations/*.ts"],
  cli: {
    migrationsDir: 'migrations',
  }
};
 
export default config;