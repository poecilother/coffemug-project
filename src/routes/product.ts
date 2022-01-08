import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers';
import { ProductMiddleware } from '../middleware';

router.get('/', ProductController.getProductsList);
router.get('/:id', ProductMiddleware.validateProductId, ProductController.getProduct);

router.post('/', ProductMiddleware.validateProductData, ProductController.createProduct);

router.put('/', ProductMiddleware.validateProductId, ProductMiddleware.validateProductData, ProductController.updateProduct);

export default router;
