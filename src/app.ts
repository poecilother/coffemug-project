import 'dotenv/config';

import express from "express";

const app = express();

import routes from './routes';
const port = process.env.PORT;

app.use(express.json());
app.use('/', routes);

app.get('/', (req, res) => { res.send('coffemug-project api is working') });

app.listen(port, () => {
  console.log(`Listen on port ${ port }`);
});
