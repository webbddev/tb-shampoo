'use client';

import Image from 'next/image';
import { shampooData } from '../../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useState } from 'react';

const ProductDescriptionGallery = () => {
  const { shampooImages, title } = shampooData;

  // State to keep track of the selected shampoo
  const [selectedShampoo, setSelectedShampoo] = useState(shampooImages[0]);

  return (
    <section id='about' className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto max-w-[1024px]'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          {/* Large image section */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            // className='flex flex-col lg:flex-row flex-1'
            className='flex-1 w-full h-[50vh] lg:h-[80vh]'
            layout='responsive' // Ensures responsiveness across screen sizes
          >
            {/* Display selected shampoo image */}
            <Image
              src={selectedShampoo.src}
              alt={selectedShampoo.alt}
              className='w-full h-full object-cover rounded-lg'
            />
          </motion.div>

          {/* Text section */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='h2'>{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='font-light max-w-[530px] text-grey'>
                {/* Display the description of the selected shampoo */}
                <p className='mb-6'>{selectedShampoo.description}</p>
              </div>
            </div>

            {/* Small images grid */}
            <motion.div
              
              className='mt-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'
            >
              {/* <div className='mt-7 grid grid-cols-2 md:grid-cols-3 gap-4'> */}
              {shampooImages.map((shampoo) => (
                <div key={shampoo.alt}>
                  <Image
                    src={shampoo.src}
                    alt={shampoo.alt}
                    className={`w-full h-auto object-cover rounded-lg cursor-pointer ${
                      selectedShampoo.alt === shampoo.alt
                        ? 'border-2 border-green-500'
                        : ''
                    }`}
                    onClick={() => setSelectedShampoo(shampoo)} // Change large image and description on click
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescriptionGallery;
