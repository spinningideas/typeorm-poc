import { Connection, Repository } from 'typeorm';


export type ObjectType<T> = { new (): T } | Function;

export default class TypeOrmRepository<T>  {

	dbConn: Connection;
	modelType:ObjectType<T>;
	repo:Repository<T> = null;

	constructor(dbConn: Connection, type: ObjectType<T>) {
		if (dbConn) {
			this.dbConn = dbConn;
		}
		this.modelType = type;
	}

	getRepo =()=> {
		if(!this.repo){
			this.repo = this.dbConn.getRepository<T>(this.modelType);
			return this.repo;
		}
		return this.repo;
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
		let orderDirection = 'ASC';
		if(orderDesc===true){
			orderDirection = 'DESC'
		}
		const orderByVal = [[orderBy, orderDirection]];

		const [resultData, resultCount] = await this.getRepo()
			.findAndCount({
				where: criteria,
				skip: offset,
				take: pageSize
			})
			.then(
				data => {
					return data;
				},
				err => {
					return err;
				}
			);

			return { total: resultCount, data: resultData };
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
				return data.toJSON();
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
