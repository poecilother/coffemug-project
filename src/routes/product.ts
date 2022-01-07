import { Router } from 'express';
const router = Router();

import { ProductController } from '../controllers';

router.get('/', ProductController.getProductsList);

export default router;
