import { default as db } from '../data/database.js';

class Order {
  constructor({
    id,
    total,
    customerName,
    email,
    street,
    postalCode,
    city,
    items
  }) {
    this.id = id;
    this.total = total;
    this.customerName = customerName;
    this.email = email;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.items = items;
  }

  async save() {
    const newOrder = [
      this.id,
      this.total,
      this.customerName,
      this.email,
      this.street,
      this.postalCode,
      this.city
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

    for (const item of this.items) {
      orderedItems.push([
        this.id,
        item.productId,
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

    return await db.query(itemQuery, [orderedItems]);
  }
}

export default Order;
