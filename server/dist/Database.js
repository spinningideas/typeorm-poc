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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Continent_1 = __importDefault(require("./models/Continent"));
const Country_1 = __importDefault(require("./models/Country"));
class Database {
    constructor(dbConn) {
        this.initConnection = () => {
            if (!this.dbConn) {
                return typeorm_1.createConnection({
                    type: "postgres",
                    host: "localhost",
                    port: 5432,
                    username: "postgres",
                    password: "P0stGr3s",
                    database: "orm_poc_typeorm",
                    entities: [
                        Continent_1.default, Country_1.default
                        //__dirname + "\\models\\*.ts"
                    ],
                    synchronize: true,
                    logging: false
                }).then((connection) => __awaiter(this, void 0, void 0, function* () {
                    this.dbConn = connection;
                    return this.dbConn;
                })).catch(err => {
                    console.log(err);
                    return Promise.reject(new Error(err));
                });
            }
            else {
                return Promise.resolve(this.dbConn);
            }
        };
        if (dbConn) {
            this.dbConn = dbConn;
        }
    }
}
exports.default = Database;
//# sourceMappingURL=Database.js.map