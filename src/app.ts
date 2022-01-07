import 'dotenv/config';

import express from "express";

const app = express();

import routes from './routes';
import database from './configs/sequelize';

const port = process.env.PORT;

database.connect();

app.use(express.json());
app.use('/', routes);

app.get('/', (req, res) => { res.send('coffemug-project api is working') });

app.listen(port, () => {
  console.log(`Listen on port ${ port }`);
});
