'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export function clearCart() {
  // get cookie

  cookies().delete('cart');
  redirect('/checkout/thankyou');
}
