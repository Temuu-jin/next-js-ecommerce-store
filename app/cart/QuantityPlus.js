'use client';
import styles from '../page.module.scss';
import { quantityPlus } from './actions';

export default function QuantityPlus(props) {
  console.log('props', props);
  return (
    <div>
      <form>
        <button
          className={styles.btn2}
          formAction={() => quantityPlus(props.productId)}
        >
          +1
        </button>
      </form>
    </div>
  );
}
