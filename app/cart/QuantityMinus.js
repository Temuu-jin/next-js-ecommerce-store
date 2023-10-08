'use client';
import { quantityMinus } from './actions';

export default function QuantityMinus(props) {
  console.log('props', props);
  return (
    <div>
      <form>
        <button formAction={() => quantityMinus(props.productId)}>-1</button>
      </form>
    </div>
  );
}
