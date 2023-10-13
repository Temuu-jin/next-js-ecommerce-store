// Unit: Test function that combines the product data from the database with the product quantity data from your cookie

import { expect, test } from '@jest/globals';
import { getProductsInCart } from '../functions';

test('Test function that combines the product data from the database with the product quantity data from your cookie', async () => {
  const cartData = [
    {
      id: 1,
      quantity: 2,
    },
    {
      id: 2,
      quantity: 1,
    },
  ];
  const products = [
    {
      id: 1,
      name: 'test1',
      image: 'test1.jpg',
      description: 'test1',
      price: 100,
    },
    {
      id: 2,
      name: 'test2',
      image: 'test2.jpg',
      description: 'test2',
      price: 200,
    },
  ];

  expect(await getProductsInCart(cartData, products)).toEqual([
    {
      id: 1,
      name: 'test1',
      image: 'test1.jpg',
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      name: 'test2',
      image: 'test2.jpg',
      price: 200,
      quantity: 1,
    },
  ]);
});
