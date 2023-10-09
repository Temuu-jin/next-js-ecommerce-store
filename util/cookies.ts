import { cookies } from 'next/headers';

export function getCookie(name: string): string | undefined {
  return cookies().get(name)?.value;
}
