import { Router } from 'express';
import { getUserDetails } from '../controllers/user.controller.js';

const router = Router();

router.post('/', getUserDetails);

export  default router;
