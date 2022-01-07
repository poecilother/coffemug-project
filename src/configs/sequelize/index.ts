import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  dialect: 'mysql',
  logging: false
});

const database = {
  connect: async () => {
    try {
      await sequelize.authenticate();
      console.log(`Connection to ${ process.env.DB } has been established successfully.`);
      await sequelize.sync();
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  }
};

export default database;
