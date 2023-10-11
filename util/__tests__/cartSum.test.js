import { expect, test } from '@jest/globals';
import { cartSum } from '../functions';

// Unit: Test cart sum function

test('Unit: Test cart sum function', () => {
  const cartProducts = [
    {
      id: 1,
      name: 'test1',
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      name: 'test2',
      price: 200,
      quantity: 1,
    },
  ];
  expect(cartSum(cartProducts)).toEqual(400);
});
