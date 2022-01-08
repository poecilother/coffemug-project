import { Request, Response, NextFunction } from "express";
import { ProductService } from "../services";
import { restUtils } from "../utils/rest-utils";
import { ProductValidation } from "../utils/product-validation";

export const ProductMiddleware = {
  async validateProductId(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'GET') {
      res.locals.productId = parseInt(req.params.id);
    } else {
      res.locals.productId = parseInt(req.body.product.id);
    }
    
    if (Object.is(res.locals.productId, NaN)) {
      return res.status(restUtils.responseStatus.BAD_REQUEST).send(restUtils.responseMessage.invalidValue('id', 'number'));
    }

    if (req.method !== 'GET') {
      try {
        if (!await ProductService.getProduct(res.locals.productId)) {
          return res.status(restUtils.responseStatus.NOT_FOUND).send(restUtils.responseMessage.notFound('product'));
        }
      } catch (err) {
        return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
      }
    }

    next();
  },

  async validateProductData(req: Request, res: Response, next: NextFunction) {
    const invalidFields = [];
    let validateHelper: string;

    validateHelper = ProductValidation.name(req.body.product.name);
    if (validateHelper) invalidFields.push({ field: 'name', message: validateHelper });
    
    validateHelper = ProductValidation.price(req.body.product.price);
    if (validateHelper) invalidFields.push({ field: 'price', message: validateHelper });
    
    if (invalidFields.length) return res.status(restUtils.responseStatus.BAD_REQUEST).send(invalidFields);
    
    try {
      if (await ProductService.getProductByName(req.body.product.name)) {
        return res.status(restUtils.responseStatus.BAD_REQUEST).send(restUtils.responseMessage.valueAlreadyInUse('name'));
      }
    } catch (err) {
      return res.status(restUtils.responseStatus.INTERNAL_SERVER).send(err);
    }

    res.locals.productPrice = parseFloat(req.body.product.price);
    next();
  },
};
