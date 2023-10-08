'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function deleteItem(productId) {
  console.log('this product is being deleted', productId);
  // get cookie
  const cartCookie = getCookie('cart');

  // if no cartCookie make it empty array, otherwise parseJson to make it an array of objects
  const jsonCart = !cartCookie ? [] : parseJson(cartCookie);

  // filter jsonCart to remove the item with productId
  const newCart = jsonCart.filter((item) => {
    const itemId = parseInt(item.id);
    if (itemId !== productId) {
      return item;
    }
  });
  // set updated cartCookie
  cookies().set('cart', JSON.stringify(newCart));
}

export async function changeQuantity(productId) {
  // get cookie with quantity
  const cartCookie = parseJson(getCookie('cart'));
  const productCookie = cartCookie.find((item) => {
    const itemId = parseInt(item.id);
    if (itemId === productId) {
      return item;
    }
  });
  console.log('this product is being changed', productCookie);
  // quantity += 1

  //quantity -+ 1
}

export async function quantityPlus(productId) {
  const cartCookieString = await getCookie('cart');

  const cartCookie = parseJson(cartCookieString);

  // find the item to be updated in cartCookie
  /* const itemToUpdate = cartCookie.find((item) => {
    return item.id === productId;
  }); */

  // new cookie array map
  const newCart = cartCookie.map((item) => {
    const itemId = parseInt(item.id);
    // check for item to change
    if (itemId === productId) {
      // change quantity
      const newQuantity = parseInt(item.quantity) + 1;
      item.quantity = newQuantity;
      // save new quantity
      return item;
    } else {
      return item;
    }
  });

  cookies().set('cart', JSON.stringify(newCart));
}

export async function quantityMinus(productId) {
  const cartCookieString = await getCookie('cart');

  const cartCookie = parseJson(cartCookieString);

  // find the item to be updated in cartCookie
  /* const itemToUpdate = cartCookie.find((item) => {
    return item.id === productId;
  }); */

  // new cookie array map
  const newCart = cartCookie.map((item) => {
    const itemId = parseInt(item.id);
    // check for item to change
    if (itemId === productId) {
      // change quantity
      const newQuantity = item.quantity - 1;
      item.quantity = newQuantity;
      // save new quantity
      return item;
    } else {
      return item;
    }
  });

  cookies().set('cart', JSON.stringify(newCart));
}
// if quantity < 1, delete productId from cookie
// safe new cookie array in const

// set cookie to new cookie
