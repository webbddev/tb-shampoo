'use client';

import Link from 'next/link';
import { IoMdArrowForward } from 'react-icons/io';

export default function NotFound() {
  return (
    <>
      <main className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h2 className='text-3xl mb-2 h2'>There was a problem.</h2>
        <p className='font-light mb-2'>
          We could not find the page you were looking for!
        </p>
        <p className='font-light flex items-center'>
          Go back
          <Link href='/' className='underline text-gray-600 ml-2'>
            <button
              className='flex items-center btn btn-lg btn-link font-normal'
              aria-label='Back to Home'
            >
              {<IoMdArrowForward />} Home
            </button>
          </Link>
        </p>
      </main>
    </>
  );
}
