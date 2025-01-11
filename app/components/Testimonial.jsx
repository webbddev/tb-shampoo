'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslations } from 'next-intl';
import QuoteImg from '../../public/img/testimonial/quote.svg';

const Testimonial = () => {
  const t = useTranslations('testimonial');

  return (
    <motion.section
      id='testimonial'
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      veiwport={{ once: false, amount: 0.2 }}
      className='py-[40px] lg:pb-[160px] lg:pt-0'
    >
      <div className='container mx-auto'>
        {/* Title Section */}
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[600px] text-gray-800 font-oswald mb-8 3xl:mb-16'
        >
          {t('title')}
        </motion.h2>
        <Swiper>
          {[0, 1].map((index) => (
            <SwiperSlide key={index}>
              <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                <div className='w-[154px] h-[109px] mb-5'>
                  <Image src={QuoteImg} alt='Quote' width={154} height={109} />
                </div>
                <div className='flex-1 lg:mt-[54px]'>
                  <h4 className='font-thin text-xl lg:text-[22px] 2xl:text-[24px] leading-normal mb-6 lg:mb-12'>
                    {t(`slides.${index}.message`)}
                  </h4>
                  <div className='flex items-center text-xl lg:text-2xl font-primary'>
                    <div className='font-oswald font-regular'>
                      {t(`slides.${index}.name`)}
                    </div>
                    <span className='mx-4'>|</span>
                    <div className='font-oswald font-light'>
                      {t(`slides.${index}.occupation`)}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
