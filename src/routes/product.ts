import { Router } from 'express';
const router = Router();


router.get('/', (req, res) => { res.send('coffemug-project product is working') });

export default router;
