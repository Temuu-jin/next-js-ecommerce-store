'use client';
import { quantityPlus } from './actions';

export default function Plus(productId) {
  return (
    <div>
      <form>
        <button
          className="text-purple bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.3  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          formAction={() => quantityPlus(productId)}
        >
          +
        </button>
      </form>
    </div>
  );
}
