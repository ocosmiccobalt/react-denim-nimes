import bodyParser from 'body-parser';
import express from 'express';

import { default as productsRoutes } from './routes/products.routes.js';
import { default as ordersRoutes } from './routes/orders.routes.js';
import enableCors from './middlewares/cors.js';

const app = express();

app.use(bodyParser.json());

app.use(enableCors);

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
