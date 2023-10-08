'use client';
import { useState } from 'react';
import { setItemQuantityInCart } from './actions';

export default function AddQuantity(props) {
  const [itemQuantity, setItemQuantity] = useState('');

  return (
    <form>
      <input
        value={itemQuantity}
        onChange={(event) => setItemQuantity(event.target.value)}
      />
      <button
        formAction={async () =>
          await setItemQuantityInCart(props.productId, itemQuantity)
        }
      >
        {' '}
        Add to Cart{' '}
      </button>
    </form>
  );
}
