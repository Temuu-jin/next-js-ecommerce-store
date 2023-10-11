'use client';
import { useState } from 'react';
import styles from '../../page.module.scss';
import { addToCart } from './actions';

export default function AddQuantity(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <form>
      <input
        data-test-id="product-quantity"
        className={styles.center}
        type="number"
        min={1}
        value={itemQuantity}
        onChange={(event) => setItemQuantity(Number(event.currentTarget.value))}
      />
      <button
        data-test-id="product-add-to-cart"
        className={styles.btn}
        formAction={async () =>
          await addToCart(props.productId, itemQuantity, props.cookieData)
        }
      >
        {' '}
        Add to Cart{' '}
      </button>
    </form>
  );
}
