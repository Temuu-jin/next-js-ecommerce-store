import { cookies } from 'next/headers';
import { getProducts } from '../database/products';
import { Product } from '../migrations/00000-createTableProducts';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

type CookieObject = {
  id: string;
  quantity: string;
};

export function getParsedCart(): CookieObject[] {
  const cartCookieString = cookies().get('cart');
  return cartCookieString
    ? cartCookieString.value
      ? JSON.parse(cartCookieString.value)
      : []
    : [];
}

export async function getProductsInCart(): Promise<CartItem[]> {
  try {
    const cartData: CookieObject[] = getParsedCart(); // should be type  CookieObject[]
    const products: Product[] = await getProducts();

    const cartProductsWithQuantity = cartData.map((cartItem) => {
      const productId = parseInt(cartItem.id); // Convert cartItem.id to an integer for matching.
      const product: Product = products.find(
        (p: Product) => p.id === productId,
      )!;
      const productPrice: number = parseFloat(product.price.toString());

      const quantity = parseInt(cartItem.quantity);
      const totalPrice = productPrice * quantity;

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        total: totalPrice,
      } as CartItem;
    });
    // Filter out null values and assign the result to a new variable of type CartItem[]
    const filteredCartProductsWithQuantity: CartItem[] =
      cartProductsWithQuantity;

    return filteredCartProductsWithQuantity;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
