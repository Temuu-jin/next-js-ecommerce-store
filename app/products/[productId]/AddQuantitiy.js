'use client';
import { useState } from 'react';
import styles from '../../page.module.scss';
import { setItemQuantityInCart } from './actions';

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
          await setItemQuantityInCart(props.productId, itemQuantity)
        }
      >
        {' '}
        Add to Cart{' '}
      </button>
    </form>
  );
}
