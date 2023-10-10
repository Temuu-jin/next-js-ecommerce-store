'use client';
import { quantityPlus } from './actions';

export default function Plus(productId) {
  return (
    <div>
      <form>
        <button formAction={() => quantityPlus(productId)}>+</button>
      </form>
    </div>
  );
}
