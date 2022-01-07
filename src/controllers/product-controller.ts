import { ProductService } from '../services';
import { Request, Response } from "express";
import { restUtils } from '../utils/rest-utils';

export const ProductController = {
  async getProductsList(req: Request, res: Response) {
    const productList = await ProductService.getProductsList();
    return res.status(restUtils.responseStatus.OK).send(productList)
  },

  async getProduct(req: Request, res: Response) {
    const product = await ProductService.getProduct(res.locals.productId);
    return res.status(restUtils.responseStatus.OK).send(product);
  },
}
