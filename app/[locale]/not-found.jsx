'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-dark text-white'>
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        animate='show'
        className='text-center px-4'
      >
        <h1 className='font-oswald text-6xl mb-4'>404</h1>
        <h2 className='font-rozha text-2xl mb-6'>Page Not Found</h2>
        <p className='font-secondary mb-8'>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href='/'
          className='font-oswald inline-block py-3 px-8 border border-white hover:bg-white hover:text-dark transition-all duration-300'
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
