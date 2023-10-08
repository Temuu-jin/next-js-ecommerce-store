'use client';
import { clearCart } from './actions';

export default function CheckoutButton() {
  let total = 0;
  return (
    <form>
      <button formAction={() => clearCart()}>Confirm Order</button>
    </form>
  );
}
