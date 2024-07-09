import Product from '../models/product.model.js';

export async function getAllProducts(req, res, next) {
  let products;

  try {
    products = await Product.getAllProducts();
  } catch (error) {
    return next(error);
  }

  res.json(products);
}
