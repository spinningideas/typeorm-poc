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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const DataBase_1 = __importDefault(require("./DataBase"));
const ContinentManager_1 = __importDefault(require("./managers/ContinentManager"));
const CountryManager_1 = __importDefault(require("./managers/CountryManager"));
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 6001;
const app = express_1.default();
// Setup app 
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
const db = new DataBase_1.default(null);
db.initConnection().then((dbConnection) => __awaiter(void 0, void 0, void 0, function* () {
    //====================continents=======================
    app.get('/continents', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const manager = new ContinentManager_1.default(dbConnection);
        return yield manager.findAll().then(continents => {
            res.json(continents);
        });
    }));
    //====================countries==============================
    app.get('/countries/:continentCode/:pageNumber/:pageSize/:orderBy/:orderDesc', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { continentCode } = req.params;
        const { pageNumber } = req.params;
        const { pageSize } = req.params;
        const { orderBy } = req.params;
        const { orderDesc } = req.params;
        const manager = new CountryManager_1.default(dbConnection);
        return yield manager.findByContinentCodePaged(continentCode, pageNumber, pageSize, orderBy, orderDesc).then(results => {
            if (!results) {
                res.status(404).json({ message: 'countries not found with continentCode: ' + continentCode });
            }
            else {
                res.json(results);
            }
        });
    }));
    app.get('/country/:countryCode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let countryCode = req.params.countryCode;
        const manager = new CountryManager_1.default(dbConnection);
        return yield manager.getByCountryCode(countryCode)
            .then(results => {
            if (!results) {
                res.status(404).json({ message: 'country not found with countryCode: ' + countryCode });
            }
            else {
                res.json(results);
            }
        });
    }));
    //====================app start==============================
    app.listen(PORT, () => {
        console.log(`Server running at: ${HOST}:${PORT} `);
    });
})).catch((error) => console.log(error));
//# sourceMappingURL=app.js.map