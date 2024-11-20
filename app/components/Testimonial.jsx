'use client';

import React from 'react';
// import testimonial data
import Image from 'next/image';
import { testimonialData } from '../../data';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
// import motion
import { motion } from 'framer-motion';
// import fadeIn
import { fadeIn } from '../variants';
const Testimonial = () => {
  return (
    <motion.section
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      veiwport={{ once: false, amount: 0.2 }}
      className='py-[40px] lg:pb-[160px] lg:pt-0'
    >
      <div className='container mx-auto'>
        <Swiper>
          {testimonialData.map((slide, index) => {
            // destructure slide
            const { quoteImg, message, name, occupation } = slide;
            return (
              <SwiperSlide key={index}>
                <div className='max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]'>
                  {/* quote image */}
                  <div className='w-[154px] h-[109px] mb-5'>
                    <Image
                      src={quoteImg}
                      alt='Quote'
                      width={154}
                      height={109}
                    />
                  </div>
                  {/* message, name & occupation */}
                  <div className='flex-1 lg:mt-[54px]'>
                    {/* message */}
                    <div className='font-thin text-2xl lg:text-[26px] xl:text-[26px] 2xl:text-[40px] leading-normal mb-6 lg:mb-12'>
                      {message}
                    </div>
                    {/* name & occupation */}
                    <div className='flex items-center text-xl lg:text-2xl font-primary'>
                      {/* name */}
                      <div className='font-oswald font-regular'>{name}</div>
                      <span className='mx-4'>| </span>
                      {/* occupation */}
                      <div className='font-oswald font-light'>{occupation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
