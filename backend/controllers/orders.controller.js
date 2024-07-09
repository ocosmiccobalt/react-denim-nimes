import { v4 as uuidv4 } from 'uuid';

import Order from '../models/order.model.js';

export async function addOrder(req, res, next) {
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

  const order = new Order({
    id: orderId,
    total: orderData.total,
    customerName: orderData.customer.name,
    email: orderData.customer.email,
    street: orderData.customer.street,
    postalCode: orderData.customer['postal-code'],
    city: orderData.customer.city,
    items: orderData.items
  });

  try {
    await order.save();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ message: 'Order' + orderId + 'created!' });
}
