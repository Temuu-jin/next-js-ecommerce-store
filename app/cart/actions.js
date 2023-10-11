'use server';
import { cookies } from 'next/headers';
import { getParsedCart } from '../../util/cookies';

export async function deleteItem(productId) {
  // get cookie
  const jsonCart = await getParsedCart();

  // filter jsonCart to remove the item with productId
  const newCart = jsonCart.filter((item) => {
    if (parseInt(item.id) !== parseInt(productId)) {
      return item;
    }
    return console.log('item deleted');
  });
  // set updated cartCookie
  cookies().set('cart', JSON.stringify(newCart));
}

export async function quantityPlus(productId) {
  const jsonCart = await getParsedCart();
  const newCart = jsonCart.map((item) => {
    const itemId = parseInt(item.id);

    if (itemId === productId.productId) {
      item.quantity += 1;
      return item;
    }
    return item;
  });
  // set updated cartCookie
  cookies().set('cart', JSON.stringify(newCart));
}

export async function quantityMinus(productId) {
  const jsonCart = await getParsedCart();

  const itemToUpdate = jsonCart.find((item) => {
    return parseInt(item.id) === productId.productId;
  });

  switch (itemToUpdate.quantity === 1) {
    case true:
      await deleteItem(itemToUpdate.id);
      break;
    case false:
      const newCart = jsonCart.map((item) => {
        const itemId = parseInt(item.id);

        if (itemId === productId.productId) {
          item.quantity -= 1;
          return item;
        }
        return item;
      });
      cookies().set('cart', JSON.stringify(newCart));
      break;
    default:
      console.log('quantityMinus switch default');
  }
}
