import { Entity, Column, Generated } from 'typeorm';

@Entity('continent', { schema: 'public' })
export default class Continent {
	@Column({
		generated: true,
		nullable: false,
		primary: true,
		name: 'continent_id'
	})
	@Generated('uuid')
	continentId: string;

	@Column({
		name: 'continent_code',
		length: 2,
		unique:true,
		nullable: false
	})
	continentCode: string;

	@Column({
		name: 'continent_name',
		length: 50,
		unique:true,
		nullable: false
	})
	continentName: string;
}
