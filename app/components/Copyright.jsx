'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-dark text-[#dbdbdb] py-6 border-t border-[#2b2b2b]'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: 'tween',
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut',
          }}
          viewport={{ once: false, amount: 0 }}
          className='tracking-[0.02em] text-base'
        >
          &copy; {currentYear}{' '}
          <span className='font-semibold text-white'>
            Tatiana Braga Shampoo
          </span>{' '}
          All right reserved
          {/* <div> */}
          <p className='text-gray-400 text-sm'>
            Icon design by{' '}
            <a
              href='https://thenounproject.com/creator/valeriy25/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-300 '
            >
              Valeriy
            </a>{' '}
            from{' '}
            <a
              href='https://thenounproject.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-gray-300 underline'
            >
              the Noun Project
            </a>{' '}
            (CC BY 3.0)
          </p>
          {/* </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Copyright;
