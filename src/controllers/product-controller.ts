import { ProductService } from '../services';
import { Request, Response } from "express";

export const ProductController = {
  async getProductsList(req: Request, res: Response) {
    const productList = await ProductService.getProductsList();
    return res.send(productList)
  }
}
