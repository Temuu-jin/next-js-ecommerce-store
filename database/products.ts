// go through logic!!!!!!!!!!

import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

// export const products1 = [
//   { id: 1, name: 'One', price: 30, rating: 4 },
//   { id: 2, name: 'Two', price: 50, rating: 3 },
//   { id: 3, name: 'Three', price: 90, rating: 2 },
//   { id: 4, name: 'Four', price: 150, rating: 1 },
//   { id: 5, name: 'Five', price: 250, rating: 5 },
// ];
type Product = {
  id: number;
  name: string;
  price: number;
  description: string | null;
};

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
