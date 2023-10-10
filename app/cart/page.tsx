import Link from 'next/link';
import { getProductsInCart } from '../functions';
import styles from '../page.module.scss';
import DeleteItem from './DeleteItem';
import Minus from './Minus';
import Plus from './Plus';

export default async function Cart() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  return (
    <main className={styles.main}>
      Cart
      <ul>
        {productsInCart.map((item) => {
          cartTotal += item.price * item.quantity;

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
                    Quantity: {item.quantity}
                    <Plus productId={item.id} />
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
