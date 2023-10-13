import { CartItem, CookieObject, Product } from './types';

export async function getProductsInCart(
  cartData: CookieObject[],
  products: Product[],
): Promise<CartItem[]> {
  try {
    const cartProductsWithQuantity = await cartData.map(
      (cartItem: CookieObject) => {
        const productId: number = Number(cartItem.id); // Convert cartItem.id to an integer for matching.
        const product: Product = products.find(
          (p: Product) => Number(p.id) === productId,
        )!;

        const quantity = cartItem.quantity;

        return {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: quantity,
        } as CartItem;
      },
    );

    return cartProductsWithQuantity;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function setItemQuantityInCart(
  productId: number,
  quantity: number,
  cookieData: CookieObject[],
): Promise<CookieObject[]> {
  // find the item to be updated in cartCookie
  const itemToUpdate = await cookieData.find((item) => {
    return item.id === productId;
  });

  // if the item exists, add quantity to its existing quantity
  if (itemToUpdate) {
    const updatedQuantity = itemToUpdate.quantity + quantity;
    itemToUpdate.quantity = updatedQuantity;
  } else {
    // if no object, push a new object to the cookie
    cookieData.push({
      id: productId,
      quantity: quantity,
    });
  }
  return cookieData;
}

export function cartSum(productsInCart: CartItem[]) {
  let sum = 0;
  productsInCart.forEach((p) => {
    sum += p.price * p.quantity;
  });
  return sum;
}
