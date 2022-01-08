import 'dotenv/config';

import express, { Application } from "express";
import routes from './routes';
import { connectToDatabase } from './models';

export async function app(app: Application) {
  const port = process.env.PORT || 4000;

  await connectToDatabase();
  
  app.use(express.json());
  app.use('/', routes);

  app.listen(port, () => {
    console.log(`Listen on port ${ port }`);
  });
};
