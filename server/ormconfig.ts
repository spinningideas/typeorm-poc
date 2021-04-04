import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'typeorm_poc_db',
  username: 'typeorm_poc_user',
  password: 'vW@N2_cBjc3',
  synchronize: false,
  logging: false,
  entities: [__dirname + '/models/*.ts'],
  migrations: ['migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
};

export default config;
