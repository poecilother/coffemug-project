import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers';
import { ProductMiddleware } from '../middleware';

router.get('/', ProductController.getProductsList);
router.get('/:id', ProductMiddleware.validateGetProduct, ProductController.getProduct);

router.post('/', ProductMiddleware.validateCreateProduct, ProductController.createProduct);

export default router;
