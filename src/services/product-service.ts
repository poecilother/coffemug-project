import { Product } from '../models/';
import { restUtils } from '../utils/rest-utils';

export const ProductService =  {
  async getProductsList() {
    try {
      return await Product.findAll();
    } catch (err) {
      console.error('Sequelize ERROR in ProductService getProductsList() Product.findAll(): ', err);
      throw restUtils.responseMessage.error;
    }
  },

  async getProduct(id: number) {
    try {
      return await Product.findByPk(id);
    } catch (err) {
      console.error('Sequelize ERROR in ProductService getProduct() Product.findAll(): ', err);
      throw restUtils.responseMessage.error;
    }
  },

  async createProduct(name: string, price: number) {
    try {
      return await Product.create({ name, price });
    } catch (err) {
      console.error('Sequelize ERROR in ProductService createProduct() Product.create(): ', err);
      throw restUtils.responseMessage.error;
    };
  },

  async getProductByName(name: string) {
    try {
      return await Product.findOne({ where: { name } });
    } catch (err) {
      console.error('Sequelize ERROR in ProductService getProductByName() Product.findOne(): ', err);
      throw restUtils.responseMessage.error;
    }
  },
};
