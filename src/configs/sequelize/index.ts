import { Dialect, Sequelize } from 'sequelize';

import product from '../../models/product';

class sequelizeConnection {
  private sequelize: Sequelize;
  
  constructor() {
    this.sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      dialect: process.env.DB_DIALECT as Dialect,
      logging: false
    });
  };
  
  async connect() {
    this.defineModel();

    await this.sequelize.authenticate();
    console.log(`Connection to ${ process.env.DB } has been established successfully.`);

    await this.sequelize.sync();
  };
  
  private defineModel() {
    product(this.sequelize);
  };
};

export default new sequelizeConnection();
