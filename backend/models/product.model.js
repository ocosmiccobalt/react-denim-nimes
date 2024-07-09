import { default as db } from '../data/database.js';

class Product {
  constructor({
    title,
    price,
    largeCard,
    availableColors,
    id
  }) {
    this.title = title;
    this.price = price;
    this.largeCard = largeCard;
    this.availableColors = availableColors;
    this.id = id;
  }

  static async getAllProducts() {
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

    return products.map((p) => new Product(p));
  }
}

export default Product;
