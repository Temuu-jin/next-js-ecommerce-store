// Unit: Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)
import { expect, test } from '@jest/globals';
import { setItemQuantityInCart } from '../functions';

test('Test function for updating quantity in item of cookie (eg. adding an item to the cart that already exists)', async () => {
  const cookie = [
    {
      id: 1,
      quantity: 2,
    },
    {
      id: 2,
      quantity: 1,
    },
  ];

  const quantity = 1;

  const productId = 1;

  expect(await setItemQuantityInCart(productId, quantity, cookie)).toEqual([
    {
      id: 1,
      quantity: 3,
    },
    {
      id: 2,
      quantity: 1,
    },
  ]);
});
