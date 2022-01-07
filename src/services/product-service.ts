import { Product } from '../models/';

export const ProductService =  {
  async getProductsList() {
    return await Product.findAll();
  }
};
