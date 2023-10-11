import { cookies } from 'next/headers';

export function getParsedCart() {
  const cartCookieString = cookies().get('cart')?.value;

  return cartCookieString ? JSON.parse(cartCookieString) : [];
}
