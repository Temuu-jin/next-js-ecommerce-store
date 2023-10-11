import { cookies } from 'next/headers';

export function getParsedCart() {
  const cartCookieString = cookies().get('cart');

  return cartCookieString
    ? cartCookieString.value
      ? JSON.parse(cartCookieString.value)
      : []
    : [];
}
