'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ShampooImg1 from '../../public/img/shampoo/product-3.jpg';
import ShampooImg2 from '../../public/img/shampoo/product-4.jpg';
import ShampooImg3 from '../../public/img/shampoo/3-shampoo.jpg';
import ShampooImg4 from '../../public/img/shampoo/4-shampoo.jpg';
import ShampooImg5 from '../../public/img/shampoo/5-shampoo.jpg';
import { useTranslations } from 'next-intl';

const ProductsRange = () => {
  const t = useTranslations('productsRange');

  return (
    <section id='productsRange' className='section container mx-auto'>
      <motion.h2
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='h2 max-w-[640px] text-gray-800 font-oswald mb-7 3xl:mb-24'
      >
        {t('title')}
      </motion.h2>

      <div
        // variants={fadeIn('up')}
        // initial='hidden'
        // whileInView={'show'}
        // viewport={{ once: false, amount: 0.2 }}
        className='flex flex-col gap-4 max-w-7xl 2xl:w-[1360px] 3xl:w-[1410px] mx-auto'
      >
        {/* Top row: 2 larger images with text cards */}
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[300px] md:h-[460px] lg:h-[600px]'>
              <Image
                src={ShampooImg1}
                alt={t('products.0.alt')}
                fill
                className='object-cover h-full w-full'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold font-oswald mb-2'>
                {t('products.0.title')}
              </h3>
              <p className='p text-gray-600 leading-relaxed font-light'>
                {t('products.0.description')}
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[300px] md:h-[460px] lg:h-[600px]'>
              <Image
                src={ShampooImg2}
                alt={t('products.1.alt')}
                fill
                className='object-cover h-full w-full'
                sizes='(max-width: 768px) 100vw, 50vw'
                priority
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold font-oswald mb-2'>
                {t('products.1.title')}
              </h3>
              <p className='p text-gray-600 leading-relaxed font-light'>
                {t('products.1.description')}
              </p>
            </div>
          </div>
        </div>

        {/* <motion.h4
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex-1 h4 font-oswald uppercase tracking-wide text-left lg:ml-[-20px] mt-8 mb-4'
        >
          {t('subTitle')}
        </motion.h4> */}

        {/* Bottom row: 3 smaller images with text cards */}
        {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'>
              <Image
                src={ShampooImg3}
                alt='Product 3'
                fill
                className='object-cover h-full w-full'
                sizes='(max-width: 768px) 33vw, 20vw'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-bold font-oswald mb-2'>
                {t('products.2.title')}
              </h3>
              <p className='p text-gray-600 font-light'>
                {t('products.2.description')}
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'>
              <Image
                src={ShampooImg4}
                alt='Product 4'
                fill
                className='object-cover h-full w-full'
                sizes='(max-width: 768px) 33vw, 20vw'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-bold font-oswald mb-2'>
                {t('products.3.title')}
              </h3>
              <p className='p text-gray-600 font-light'>
                {t('products.3.description')}
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
            <div className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'>
              <Image
                src={ShampooImg5}
                alt='Product 5'
                fill
                className='object-cover h-full w-full'
                sizes='(max-width: 768px) 33vw, 20vw'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-bold font-oswald mb-2'>
                {t('products.4.title')}
              </h3>
              <p className='p text-gray-600 font-light'>
                {t('products.4.description')}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductsRange;
