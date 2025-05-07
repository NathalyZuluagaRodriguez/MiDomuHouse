import { Router } from 'express';
import { registerAdmin } from '../controllers/adminController';

const router = Router();

router.post('/admin/registro', registerAdmin);

export default router;
