import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers';
import { ProductMiddleware } from '../middleware';

router.get('/', ProductController.getProductsList);
router.get('/:id', ProductMiddleware.validateGetProduct, ProductController.getProduct);

export default router;
