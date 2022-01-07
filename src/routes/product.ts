import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers';
import { ProductMiddleware } from '../middleware';

router.get('/', ProductController.getProductsList);

export default router;
