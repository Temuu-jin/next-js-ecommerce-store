'use client';
import { useState } from 'react';
import styles from '../../page.module.scss';
import { setItemQuantityInCart } from './actions';

export default function ChangeQuantity(props) {
  const [itemQuantity, setItemQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = async (event) => {
    const newQuantity = parseInt(event.target.value);

    // Update the local state
    setItemQuantity(newQuantity);

    // Update the cart immediately
    await setItemQuantityInCart(props.productId, newQuantity);
  };

  return (
    <form>
      <input
        className={styles.center}
        type="number"
        min={1}
        value={itemQuantity}
        onChange={handleQuantityChange}
      />
    </form>
  );
}
