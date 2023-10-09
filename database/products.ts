import 'server-only';
import { cache } from 'react';
import { Product } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
SELECT * FROM products
`;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT
    *
  FROM
    products
  WHERE
    id = ${id}
    `;
  return product;
});

// export function getProduct(id: number) {
//   return products1.find((product) => product.id === id);
// }
/* const products = [
  { name: 'Salmon Aburi', description: 'This is product 1', price: 10 },
  { name: 'Hosomaki', description: 'This is product 2', price: 11 },
  { name: 'Uramaki', description: 'This is product 3', price: 12 },
  { name: 'Temaki', description: 'This is product 4', price: 13 },
];

export function getProducts() {
  return products;
}

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
 */
