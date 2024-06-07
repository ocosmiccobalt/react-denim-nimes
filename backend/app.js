import bodyParser from 'body-parser';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { default as db } from './data/database.js';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/products', async (req, res) => {
  const query = `
    SELECT
    m.id,
    m.title,
    m.price,
    m.large_card AS largeCard,
    JSON_ARRAYAGG(c.name) AS availableColors
    FROM models AS m
    INNER JOIN models_colors AS mc ON m.id = mc.model_id
    INNER JOIN colors AS c ON mc.color_id = c.id
    GROUP BY m.id
    ORDER BY m.id
  `;
  const [products] = await db.query(query);
  res.json(products);
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const orderId = uuidv4();
  const newOrder = [
    orderId,
    orderData.total,
    orderData.customer.name,
    orderData.customer.email,
    orderData.customer.street,
    orderData.customer['postal-code'],
    orderData.customer.city
  ];

  const orderQuery = `
    INSERT INTO orders (
      id,
      total,
      customer_name,
      email,
      street,
      postal_code,
      city
    ) VALUES (?)
  `;

  const orderedItems = [];

  for (const item of orderData.items) {
    orderedItems.push([
      orderId,
      item.pId,
      item.color,
      item.size,
      item.amount,
      item.title,
      item.price
    ]);
  }

  const itemQuery = `
    INSERT INTO ordered_items (
      order_id,
      model_id,
      color_name,
      size_abbr,
      amount,
      title,
      price
    ) VALUES ?
  `;

  await db.query(orderQuery, [newOrder]);
  await db.query(itemQuery, [orderedItems]);

  res.status(201).json({ message: 'Order created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
