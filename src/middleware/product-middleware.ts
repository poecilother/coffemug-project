import { Request, Response, NextFunction } from "express";
import { restUtils } from "../utils/rest-utils";

export const ProductMiddleware = {
  validateGetProduct(req: Request, res: Response, next: NextFunction) {
    res.locals.productId = parseInt(req.params.id);
    if (Object.is(res.locals.productId, NaN)) return res.status(restUtils.responseStatus.BAD_REQUEST).send();

    next();
  },
};
