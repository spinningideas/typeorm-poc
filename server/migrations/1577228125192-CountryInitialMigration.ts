import { MigrationInterface, QueryRunner } from 'typeorm';

export class CountryInitialMigration1577228125192 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const tableExists = await queryRunner.hasTable('country');
    if (!tableExists) {
      await queryRunner.query(`
			CREATE TABLE public.country
			(
					country_id uuid NOT NULL,
					country_name character varying(100) COLLATE pg_catalog."default",
					country_code character varying(2) COLLATE pg_catalog."default",
					country_code3 character varying(3) COLLATE pg_catalog."default",
					capital character varying(100) COLLATE pg_catalog."default",
					continent_code character varying(2) COLLATE pg_catalog."default",
					area integer,
					population integer,
					latitude numeric(10,6),
					longitude numeric(10,6),
					currency_code character varying(3) COLLATE pg_catalog."default",
					currency_name character varying(50) COLLATE pg_catalog."default",
					languages character varying(255) COLLATE pg_catalog."default",
					CONSTRAINT country_pkey PRIMARY KEY (country_id),
					CONSTRAINT country_country_name_key UNIQUE (country_name)
			
			)`);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE "country"');
  }
}
