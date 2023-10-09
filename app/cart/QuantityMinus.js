'use client';
import styles from '../page.module.scss';
import { quantityMinus } from './actions';

export default function QuantityMinus(props) {
  console.log('props', props);
  return (
    <div>
      <form>
        <button
          className={styles.btn2}
          formAction={() => quantityMinus(props.productId)}
        >
          -1
        </button>
      </form>
    </div>
  );
}
