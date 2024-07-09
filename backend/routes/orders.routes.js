import express from 'express';

import { addOrder } from '../controllers/orders.controller.js';

const router = express.Router();

router.post('/', addOrder); // /orders/

export default router;
