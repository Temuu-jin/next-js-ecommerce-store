/* A Checkout page which shows the total and asks for shipping and payment information
The first name input needs to have the HTML attribute data-test-id="checkout-first-name"
The last name input needs to have the HTML attribute data-test-id="checkout-last-name"
The email input needs to have the HTML attribute data-test-id="checkout-email"
The address input needs to have the HTML attribute data-test-id="checkout-address"
The city input needs to have the HTML attribute data-test-id="checkout-city"
The postal code input needs to have the HTML attribute data-test-id="checkout-postal-code"
The country input needs to have the HTML attribute data-test-id="checkout-country"
The credit card input needs to have the HTML attribute data-test-id="checkout-credit-card"
The expiration date input needs to have the HTML attribute data-test-id="checkout-expiration-date"
The security code input needs to have the HTML attribute data-test-id="checkout-security-code"
The form should prevent submission with any of the above fields being empty
The Confirm Order button needs to have the HTML attribute data-test-id="checkout-confirm-order"
Privacy: don't save user information (payment or other personal information) anywhere (unless you have a privacy policy and are creating a real ecommerce store)
Clicking on the Confirm Order button should empty the cart and navigate to the Thank You page */
import Link from 'next/link';
import { getProductsInCart } from '../cart/page';
import styles from '../page.module.scss';
import CheckoutButton from './Checkout';

export default async function Checkout() {
  const productsInCart = await getProductsInCart();

  let cartTotal = 0;

  productsInCart.forEach((p) => {
    cartTotal += p.price * p.quantity;
  });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Checkout</h1>
        <br />

        <p className={styles.center}>Welcome to Checkout</p>
        <h2>Shipping Information</h2>
        <div>
          <form>
            <input
              type="name"
              placeholder="First Name"
              data-test-id="checkout-first-name"
            />
            <input
              type="name"
              placeholder="Last Name"
              data-test-id="checkout-last-name"
            />
            <input
              type="email"
              placeholder="Email"
              data-test-id="checkout-email"
            />
            <input
              type="address"
              placeholder="Address"
              data-test-id="checkout-address"
            />
            <input
              type="city"
              placeholder="City"
              data-test-id="checkout-city"
            />
            <input
              type="postal code"
              placeholder="Postal Code"
              data-test-id="checkout-postal-code"
            />
            <input
              type="country"
              placeholder="Country"
              data-test-id="checkout-country"
            />
          </form>
        </div>
        <h2>Payment Information</h2>
        <div>
          <form>
            <input
              type="credit card"
              placeholder="Credit Card"
              data-test-id="checkout-credit-card"
            />
            <input
              type="expiration date"
              placeholder="Expiration Date"
              data-test-id="checkout-expiration-date"
            />
            <input
              type="security code"
              placeholder="Security Code"
              data-test-id="checkout-security-code"
            />
          </form>
        </div>
        <br />
        <span>Total: {cartTotal.toFixed(2)}</span>
        <CheckoutButton />
      </div>
    </main>
  );
}
