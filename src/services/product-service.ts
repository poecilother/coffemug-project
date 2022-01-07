import { Product } from '../models/';

export const ProductService =  {
  async getProductsList() {
    try {
      return await Product.findAll();
    } catch (err) {
      console.error('Sequelize ERROR in ProductService getProductsList() Product.findAll(): ', err);
      throw 'Something went wrong. Try again later.';
    }
  },

  async getProduct(id: number) {
    try {
      return await Product.findByPk(id);
    } catch (err) {
      console.error('Sequelize ERROR in ProductService getProduct() Product.findAll(): ', err);
      throw 'Something went wrong. Try again later.';
    }
  },
};
