import { Connection, Repository } from 'typeorm';

export type ObjectType<T> = { new (): T };

export type OrderByType = {
	[name: string]: string;
}

export default class TypeOrmRepository<T>  {

	dbConn: Connection;
	repoEntityType:ObjectType<T>;
	repo:Repository<T> = null;

	constructor(dbConn: Connection, repoType: ObjectType<T>) {
		if (dbConn) {
			this.dbConn = dbConn;
		}
		this.repoEntityType = repoType;
	}

	getRepo =()=> {
		if(!this.repo){
			this.repo = this.dbConn.getRepository<T>(this.repoEntityType);
			return this.repo;
		}
		return this.repo;
	}

	/**
	 * count all records 
	 */
	count = async () => {
		return this.getRepo()
			.count()
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	}

	/**
	 * get all records 
	 */
	 findAll = async () => {
		return this.getRepo()
			.find()
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	}

	/**
	 get all records having given criteria
	*/
	findWhere = async (criteria:any) => {
		return this.getRepo()
			.find(criteria)
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);
	}

	/**
	 get all records having given criteria
	*/
	findWherePagedSorted = async (criteria:any, pageNumber:number, pageSize:number, orderBy:string, orderDesc:boolean) => {
		if(pageNumber <= 0){
			pageNumber = 1;
		};
		
		const offset = (pageNumber-1) * pageSize;
	
		let orderByVal = this.getOrderByValue(orderBy, orderDesc);

		const [resultData, resultCount] = await this.getRepo()
			.findAndCount({
				where: criteria,
				skip: offset,
				take: pageSize,
			})
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);

			return { total: resultCount, pageSize: pageSize, data: resultData };
	}

  getOrderByValue =(orderBy:string, orderDesc:boolean):OrderByType=> {		
		let orderDirection = 'ASC';
		if(orderDesc===true){
			orderDirection = 'DESC'
		}
		const prop = this.getOrderByProp(this.repoEntityType, orderBy);
		return { prop: orderDirection };
	}
		
	getOrderByProp=<T>(obj: T, key: string):string => {
		let keys = []
		console.log('getOrderByProp-obj:' + obj);
		Object.keys(obj).forEach(key => keys.push(key));
		console.log('getOrderByProp-obj-keys:' + JSON.stringify(keys));
		return obj[key];
	}

	/**
	 * get one record using given  /:criteria
	 */
	findOneWhere = async (criteria:any) => {
		return this.getRepo()
			.findOne(criteria)
			.then(
				data => {
					return data;
				},
				err => {
					return err
				}
			);
	}

	/**
	 * create a new record using given entity data
	 */
	add = async (entity) => {
		return this.getRepo().save(entity).then(
			data => {
				return data;
			},
			err => { return err; }
		);
	}

	/**
	 * update records using given critera and entity data
	 */
	updateWhere = async (criteria, entity) => {
		this.getRepo()
			.update(entity, criteria)
			.then(
				data => {
					 return data[1][0];
				},
				err => { 
					return err;
				}
			);
	}

	/**
	 * delete records using given criteria
	 */
	deleteWhere = async (criteria:any) => {
		this.getRepo().find(criteria).then((data) => {
			this.getRepo()
				.delete(criteria)
				.then(
					() => {
						return data;
					},
					err => { 
						return err; 
					}
				);
		});
	}
}

module.exports = TypeOrmRepository;
