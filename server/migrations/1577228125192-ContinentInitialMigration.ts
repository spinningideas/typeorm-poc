import { MigrationInterface, QueryRunner } from 'typeorm';
 
export class ContinentInitialMigration1577228125192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
		const tableExists = await queryRunner.hasTable("continent");
		if(!tableExists){
			await queryRunner.query(`
			CREATE TABLE public.continent
			(
					continent_id uuid NOT NULL,
					continent_code character varying(2) COLLATE pg_catalog."default",
					continent_name character varying(50) COLLATE pg_catalog."default",
					CONSTRAINT continent_pkey PRIMARY KEY (continent_id),
					CONSTRAINT continent_continent_code_key UNIQUE (continent_code),
					CONSTRAINT continent_continent_name_key UNIQUE (continent_name)
			)`
			);
		}

	
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE "continent"');
  }
}