'use client';
import styles from '../page.module.scss';
import { handleSubmit } from './actions';

export default function CheckoutForm() {
  return (
    <button
      formAction={() => handleSubmit()}
      data-test-id="checkout-confirm-order"
      className={styles.btn}
    >
      Confirm Order
    </button>
  );
}
