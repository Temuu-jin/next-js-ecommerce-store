'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function clearCart() {
  // get cookie

  cookies().delete('cart');
  redirect('/checkout/thankyou');
}
