import { ProductService } from '../services';
import { Request, Response } from "express";
import { restUtils } from '../utils/rest-utils';

export const ProductController = {
  async getProductsList(req: Request, res: Response) {
    try {
      const productList = await ProductService.getProductsList();
      return res.status(restUtils.responseStatus.OK).send(productList);
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }
  },

  async getProduct(req: Request, res: Response) {
    try {
      const product = await ProductService.getProduct(res.locals.productId);
      return res.status(restUtils.responseStatus.OK).send(product);
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }
  },

  async createProduct(req: Request, res: Response) {
    try {
      const createdProduct = await ProductService.createProduct(req.body.product.name, res.locals.productPrice);
      return res.status(restUtils.responseStatus.CREATED).send(createdProduct);
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }
  },
}
