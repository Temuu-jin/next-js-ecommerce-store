'use client';
import { quantityPlus } from './actions';

export default function QuantityPlus(props) {
  console.log('props', props);
  return (
    <div>
      <form>
        <button formAction={() => quantityPlus(props.productId)}>+1</button>
      </form>
    </div>
  );
}
