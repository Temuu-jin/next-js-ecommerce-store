'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function clearCart() {
  // get cookie

  await cookies().delete('cart');
  redirect('/checkout/thankyou');
}

export async function handleSubmit() {
  await clearCart();
  redirect('/checkout/thankyou');
}
