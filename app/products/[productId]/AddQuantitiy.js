'use client';
import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm(props) {
  const [cookieValue, setCookieValue] = useState('');

  return (
    <form>
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.target.value)}
      />
      <button
        formAction={async () =>
          await createCookie(props.productId, cookieValue)
        }
      >
        {' '}
        Set Cookie{' '}
      </button>
    </form>
  );
}
