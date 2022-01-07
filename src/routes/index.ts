import { Router } from 'express';
const router = Router();

// routes
import product from './product';

router.use('/product', product);

export default router;
