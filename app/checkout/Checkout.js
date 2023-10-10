'use client';
import styles from '../page.module.scss';
import { clearCart } from './actions';

export default function CheckoutButton() {
  return (
    <form>
      <button
        data-test-id="checkout-confirm-order"
        className={styles.btn}
        formAction={() => clearCart()}
      >
        Confirm Order
      </button>
    </form>
  );
}
