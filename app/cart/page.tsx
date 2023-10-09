import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import { Product } from '../../migrations/00000-createTableProducts';
import styles from '../page.module.scss';
import DeleteItem from './DeleteItem';

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

      if (!product) {
        // Handle the case where the product is not found, e.g., by returning a default value or skipping this item
        return null; // You can return null, undefined, or another appropriate value
      }

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
      cartProductsWithQuantity.filter(
        (item): item is CartItem => item !== null,
      );

    return filteredCartProductsWithQuantity;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default async function Cart() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  return (
    <main className={styles.main}>
      Cart
      <ul>
        {productsInCart.map((item) => {
          cartTotal += item.price * item.quantity;

          console.log(item.total.toFixed(2));
          if (item.quantity > 0) {
            return (
              <li
                className={styles.card}
                key={item.id}
                data-test-id={`cart-product-${item.id}`}
              >
                <div>
                  <h4 className={styles.cartItemName}>{item.name}</h4>
                  <p>Price: {item.price}</p>
                  <div style={{ display: 'flex' }}>
                    {/* <QuantityMinus productId={productId} />
                    <p data-test-id={`cart-product-quantity-${item.id}`}>
                      Quantity: {productQuantity}
                    </p>
                    <QuantityPlus productId={productId} /> */}
                    {/* <ChangeQuantity
                      productId={item.id}
                      initQuantity={item.quantity}
                    /> */}
                    <p data-test-id={`cart-product-quantity-${item.id}`}>
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p>Subtotal: {item.total}</p>
                  <DeleteItem productId={item.id} />
                </div>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
      <p>
        Total: <span data-test-id="cart-total">{cartTotal.toFixed(2)}</span>
      </p>
      <Link href={'/checkout'}>
        <button className={styles.btn} data-test-id="cart-checkout">
          Checkout
        </button>
      </Link>
    </main>
  );
}
