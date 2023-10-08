'use client';
import { deleteItem } from './actions';

export default function DeleteItem(props) {
  return (
    <div>
      <form>
        <button formAction={() => deleteItem(props.productId)}>Delete</button>
      </form>
    </div>
  );
}
