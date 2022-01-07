import { Product } from '../models/';

export const ProductService =  {
  async getProductsList() {
    return await Product.findAll();
  },

  async getProduct(id: number) {
    return await Product.findByPk(id);
  },
};
