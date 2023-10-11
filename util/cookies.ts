import { cookies } from 'next/headers';
import { CookieObject } from './types';

export function getParsedCart() {
  const cartCookieString = cookies().get('cart');

  return cartCookieString
    ? cartCookieString.value
      ? JSON.parse(cartCookieString.value)
      : []
    : [];
}
