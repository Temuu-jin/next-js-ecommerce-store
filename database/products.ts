import 'server-only';
import { cache } from 'react';
import { Product } from '../util/types';
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
