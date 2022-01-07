import { Dialect, Sequelize } from 'sequelize';
import { ProductModel } from './product';

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  dialect: process.env.DB_DIALECT as Dialect,
  logging: false
});

ProductModel(sequelize);

export const Product = sequelize.models.Product;

export const connectToDatabase = async () => {
  await sequelize.authenticate();
  console.log(`Connection to ${ process.env.DB } has been established successfully.`);
  await sequelize.sync();
};
