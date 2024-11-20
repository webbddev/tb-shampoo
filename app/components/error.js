'use client'; // Error components must be Client Components

import { useEffect, startTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const router = useRouter();

  return (
    <div>
      <h2>Oooops! Something went wrong!</h2>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try again
      </button>
    </div>
  );
}
