import { getProducts } from '../../database/products';
import { getParsedCart } from '../../util/cookies';
import { getProductsInCart } from '../../util/functions';
import { CookieObject, Product } from '../../util/types';
import styles from '../page.module.scss';
import CheckoutForm from './CheckoutForm';

export default async function Checkout() {
  const cartData: CookieObject[] = await getParsedCart();
  const products: Product[] = await getProducts();

  const productsInCart = await getProductsInCart(cartData, products);
  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <main className={styles.main}>
      <h1>Checkout</h1>
      <h4>Welcome to Checkout</h4>
      <div className={styles.btn}>Total: {cartTotal.toFixed(2)}</div>
      <form>
        <div className={styles.payment__cc}>
          <div className={styles.row}>
            <div className={styles.field}>
              <div className={styles.title}>Credit Card Number</div>
              <input
                className={`${styles.input} txt text-validated`}
                defaultValue="4542 9931 9292 2293"
                data-test-id="checkout-credit-card"
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={`${styles.field} small`}>
              <div className={styles.title}>Expiry Date</div>
              <input
                placeholder="MM/YY"
                data-test-id="checkout-expiration-date"
                required
                className={`${styles.input} ddl`}
              />
            </div>
            <div className={`${styles.field} small`}>
              <div className={styles.title}>CVV Code</div>
              <input
                data-test-id="checkout-security-code"
                className={`${styles.input} txt`}
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <div className={styles.title}>Name on Card</div>
              <input
                data-test-id="checkout-name-on-card"
                className={`${styles.input} txt`}
              />
            </div>
          </div>
        </div>
        <input
          className={styles.input}
          placeholder="First Name"
          required
          data-test-id="checkout-first-name"
        />
        <br />
        <input
          className={styles.input}
          placeholder="Last Name"
          data-test-id="checkout-last-name"
          required
        />
        <br />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          data-test-id="checkout-email"
          required
        />
        <br />
        <input
          className={styles.input}
          placeholder="Address"
          data-test-id="checkout-address"
          required
        />
        <br />
        <input
          className={styles.input}
          placeholder="City"
          data-test-id="checkout-city"
          required
        />
        <br />
        <input
          className={styles.input}
          placeholder="Postal Code"
          data-test-id="checkout-postal-code"
          required
        />
        <br />
        <input
          className={styles.input}
          placeholder="Country"
          data-test-id="checkout-country"
          required
        />
        <br />

        <CheckoutForm />
      </form>
    </main>
  );
}
