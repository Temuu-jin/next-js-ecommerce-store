'use client';
import { useState } from 'react';
import styles from '../../page.module.scss';
import { setItemQuantityInCart } from './actions';

export default function AddQuantity(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <form>
      <input
        className={styles.center}
        type="number"
        min={1}
        value={itemQuantity}
        onChange={(event) => setItemQuantity(event.target.value)}
      />
      <button
        className={styles.center}
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
