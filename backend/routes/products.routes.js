import express from 'express';

import { getAllProducts } from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getAllProducts); // /products/

export default router;
