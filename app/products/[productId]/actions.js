'use server';
import { cookies } from 'next/headers';
import { setItemQuantityInCart } from '../../../util/functions';

export async function addToCart(productId, quantity, cookieData) {
  const cartCookieData = await setItemQuantityInCart(
    productId,
    quantity,
    cookieData,
  );

  return cookies().set('cart', JSON.stringify(cartCookieData));
}
