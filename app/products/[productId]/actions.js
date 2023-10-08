'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function setItemQuantityInCart(productId, quantity) {
  // get the cookie called 'cart' save in cartCookie
  const cartCookie = getCookie('cart');

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  const jsonCart = !cartCookie ? [] : parseJson(cartCookie);

  // find the item to be updated in cartCookie
  const itemToUpdate = jsonCart.find((item) => {
    return item.id === productId;
  });

  // if the item exists, add quantity to its existing quantity
  if (itemToUpdate) {
    const updatedQuantity =
      parseInt(itemToUpdate.quantity) + parseInt(quantity);
    itemToUpdate.quantity = updatedQuantity;
  } else {
    // if no object, push a new object to the cookie
    jsonCart.push({
      id: productId,
      quantity: quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(jsonCart));
}
