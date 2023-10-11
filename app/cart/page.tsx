import Link from 'next/link';
import { getProducts } from '../../database/products';
import { getParsedCart } from '../../util/cookies';
import { cartSum, getProductsInCart } from '../../util/functions';
import { CartItem, CookieObject, Product } from '../../util/types';
import styles from '../page.module.scss';
import DeleteItem from './DeleteItem';
import Minus from './Minus';
import Plus from './Plus';

export default async function Cart() {
  const cartData: CookieObject[] = await getParsedCart();
  const products: Product[] = await getProducts();

  const productsInCart: CartItem[] = await getProductsInCart(
    cartData,
    products,
  );

  const cartTotal = cartSum(productsInCart);

  return (
    <main className={styles.main}>
      Cart
      <ul>
        {productsInCart.map((item) => {
          if (item.quantity > 0) {
            return (
              <li
                className={styles.card}
                key={`user-${item.id}`}
                data-test-id={`cart-product-${item.id}`}
              >
                <div>
                  <h4 className={styles.cartItemName}>{item.name}</h4>
                  <p>Price: {item.price}</p>
                  <div style={{ display: 'flex' }}>
                    <Minus productId={item.id} />
                    Quantity:{' '}
                    <p data-test-id={`cart-product-quantity-${item.id}`}>
                      {item.quantity}
                    </p>
                    <Plus productId={item.id} />
                  </div>
                  <p>Subtotal: {item.quantity * item.price}</p>
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
      <Link
        href="/checkout"
        className={styles.btn}
        data-test-id="cart-checkout"
      >
        Checkout
      </Link>
    </main>
  );
}
