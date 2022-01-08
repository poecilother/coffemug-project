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
      if (!product) return res.status(restUtils.responseStatus.NOT_FOUND).send(restUtils.responseMessage.notFound('product'));
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

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await ProductService.updateProduct(res.locals.productId, req.body.product.name, res.locals.productPrice);
      return res.status(restUtils.responseStatus.OK).send(restUtils.responseMessage.updatedRows(updatedProduct[0]));
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }
  },

  async deleteProduct(req: Request, res: Response) {
    try {
      const deletedProduct = await ProductService.deleteProduct(res.locals.productId);
      return res.status(restUtils.responseStatus.OK).send(restUtils.responseMessage.deletedRows(deletedProduct));
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }
  },
}
