'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createCookie(productId, quantity) {
  const cartCookie = getCookie('cart');

  const addedQuantities = !cartCookie ? [] : parseJson(cartCookie);

  const itemQuantityToUpdate = addedQuantities.find((addedQuantity) => {
    return addedQuantity.id === productId;
  });

  if (itemQuantityToUpdate) {
    itemQuantityToUpdate.quantity = quantity;
  } else {
    addedQuantities.push({
      id: productId,
      quantity: quantity,
    });
  }

  await cookies().set('cart', JSON.stringify(addedQuantities));
  // await cookies().set(
  //   'quantity',
  //   JSON.stringify([{ id: productId, quantity: quantity }]),
  // );
}

// if (itemQuantityToUpdate) {
//   itemQuantityToUpdate.quantity = quantity;
// } else {
//   addedQuantities.push({
//     id: itemId,
//     quantity: quantity,
//   });
// }
