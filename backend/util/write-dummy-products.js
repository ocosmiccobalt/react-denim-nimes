import fs from 'node:fs/promises';

import DUMMY_PRODUCTS from '../data/dummy-products.js';

async function writeJSON() {
  await fs.writeFile('./data/json/available-products.json', JSON.stringify(DUMMY_PRODUCTS, null, 2));
}

await writeJSON();
