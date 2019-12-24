import { Entity, Column, Generated } from 'typeorm';

@Entity('country', { schema: 'public' })
export default class Country {
	@Column({
		generated: true,
		nullable: false,
		primary: true,
		name: 'country_id'
	})
	@Generated('uuid')
	countryId: string;

	@Column({
		name: 'country_name',
		length: 100,
		unique:true
	})
	countryName: string;

	@Column({
		name: 'country_code',
		length: 2,
		unique:true
	})
	countryCode: string;

	@Column({
		name: 'country_code3',
		length: 3,
		unique:true
	})
	countryCode3: string;

	@Column({
		name: 'capital',
		length: 100
	})
	capital: string;

	@Column({
		name: 'continent_code',
		length: 2
	})
	continentCode: string;

	@Column()
	area: number;

	@Column()
	population: number;

	@Column({
		precision: 10,
		scale: 6
	})
	latitude: number;

	@Column({
		precision: 10,
		scale: 6
	})
	longitude: number;

	@Column({
		name: 'currency_code',
		length: 3
	})
	currencyCode: string;

	@Column({
		name: 'currency_name',
		length: 50
	})
	currencyName: string;

	@Column({
		name: 'languages',
		length: 255
	})
	languages: string;
}
