'use client';
import { deleteItem } from './actions';

export default function DeleteItem(props) {
  return (
    <div>
      <form>
        <button
          className="text-bubble-gum bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-small rounded-lg text-xs px-2 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
          formAction={() => deleteItem(props.productId)}
          data-test-id={`cart-product-remove-${props.productId}`}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
