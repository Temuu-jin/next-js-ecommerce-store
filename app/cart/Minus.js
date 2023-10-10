'use client';
import { quantityMinus } from './actions';

export default function Minus(productId) {
  return (
    <div>
      <form>
        <button formAction={() => quantityMinus(productId)}>-</button>
      </form>
    </div>
  );
}
