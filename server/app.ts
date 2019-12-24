import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DataBase from './DataBase';
import ContinentManager from'./managers/ContinentManager';
import CountryManager from'./managers/CountryManager';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 6001;
const app = express();

// Setup app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const db = new DataBase(null);

db.initConnection().then(async (dbConnection) => {

	//====================continents=======================
	app.get('/continents', async (req, res) => {
		const manager = new ContinentManager(dbConnection);
		return await manager.findAll().then(continents => {
			res.json(continents);
		});
	});

	//====================countries==============================

	app.get('/countries/:continentCode/:pageNumber/:pageSize/:orderBy/:orderDesc', async (req, res) => {
		const {continentCode} = req.params;
		const {pageNumber} = req.params;
		const {pageSize} = req.params;
		const {orderBy} = req.params;
		const {orderDesc} = req.params;

		const manager = new CountryManager(dbConnection);
		return await manager.findByContinentCodePaged(continentCode,
			pageNumber, 
			pageSize, 
			orderBy, 
			orderDesc
			).then(results => {
				if (!results) {
					res.status(404).json({ message: 'countries not found with continentCode: ' + continentCode });
				} else {
					res.json(results);
				}
			});
	});

	app.get('/country/:countryCode', async (req, res) => {
		let countryCode = req.params.countryCode;
		const manager = new CountryManager(dbConnection);
		return await manager.getByCountryCode(countryCode)
			.then(results => {
				if (!results) {
					res.status(404).json({ message: 'country not found with countryCode: ' + countryCode });
				} else {
					res.json(results);
				}
			});
	});

	//====================app start==============================
	app.listen(PORT, () => {
		console.log(`Server running at: ${HOST}:${PORT} `);
	});

}).catch((error) => console.log(error));





