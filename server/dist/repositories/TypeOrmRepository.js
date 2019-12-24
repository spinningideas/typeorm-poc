"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TypeOrmRepository {
    constructor(dbConn, type) {
        this.repo = null;
        this.getRepo = () => {
            if (!this.repo) {
                this.repo = this.dbConn.getRepository(this.modelType);
                return this.repo;
            }
            return this.repo;
        };
        /**
         * get all records
         */
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            return this.getRepo()
                .find()
                .then(data => {
                return data;
            }, err => {
                return err;
            });
        });
        /**
         get all records having given criteria
        */
        this.findWhere = (criteria) => __awaiter(this, void 0, void 0, function* () {
            return this.getRepo()
                .find(criteria)
                .then(data => {
                return data;
            }, err => {
                return err;
            });
        });
        /**
         get all records having given criteria
        */
        this.findWherePagedSorted = (criteria, pageNumber, pageSize, orderBy, orderDesc) => __awaiter(this, void 0, void 0, function* () {
            if (pageNumber <= 0) {
                pageNumber = 1;
            }
            ;
            const offset = (pageNumber - 1) * pageSize;
            let orderDirection = 'ASC';
            if (orderDesc === true) {
                orderDirection = 'DESC';
            }
            const orderByVal = [[orderBy, orderDirection]];
            const [resultData, resultCount] = yield this.getRepo()
                .findAndCount({
                where: criteria,
                skip: offset,
                take: pageSize
            })
                .then(data => {
                return data;
            }, err => {
                return err;
            });
            return { total: resultCount, data: resultData };
        });
        /**
         * get one record using given  /:criteria
         */
        this.findOneWhere = (criteria) => __awaiter(this, void 0, void 0, function* () {
            return this.getRepo()
                .findOne(criteria)
                .then(data => {
                return data;
            }, err => {
                return err;
            });
        });
        /**
         * create a new record using given entity data
         */
        this.add = (entity) => __awaiter(this, void 0, void 0, function* () {
            return this.getRepo().save(entity).then(data => {
                return data.toJSON();
            }, err => { return err; });
        });
        /**
         * update records using given critera and entity data
         */
        this.updateWhere = (criteria, entity) => __awaiter(this, void 0, void 0, function* () {
            this.getRepo()
                .update(entity, criteria)
                .then(data => {
                return data[1][0];
            }, err => {
                return err;
            });
        });
        /**
         * delete records using given criteria
         */
        this.deleteWhere = (criteria) => __awaiter(this, void 0, void 0, function* () {
            this.getRepo().find(criteria).then((data) => {
                this.getRepo()
                    .delete(criteria)
                    .then(() => {
                    return data;
                }, err => {
                    return err;
                });
            });
        });
        if (dbConn) {
            this.dbConn = dbConn;
        }
        this.modelType = type;
    }
}
exports.default = TypeOrmRepository;
module.exports = TypeOrmRepository;
//# sourceMappingURL=TypeOrmRepository.js.map