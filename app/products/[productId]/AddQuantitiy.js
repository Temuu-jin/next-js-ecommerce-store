'use client';
import '../../globals.css';
import { useState } from 'react';
import { addToCart } from './actions';

export default function AddQuantity(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <form className="flex-col">
      <div className="flex justify-center pt-6">
        <input
          data-test-id="product-quantity"
          type="number"
          min={1}
          value={itemQuantity}
          onChange={(event) =>
            setItemQuantity(Number(event.currentTarget.value))
          }
        />
      </div>{' '}
      <div className="flex justify-center pt-8">
        <button
          data-test-id="product-add-to-cart"
          formAction={async () =>
            await addToCart(props.productId, itemQuantity, props.cookieData)
          }
        >
          {' '}
          Add to Cart{' '}
        </button>{' '}
      </div>
    </form>
  );
}
