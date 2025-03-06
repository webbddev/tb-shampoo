'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const FeaturesCard = ({ featureNumber, index }) => {
  const t = useTranslations('features');

  // Extract object fields directly
  const topText = t(`${featureNumber}.topText`);
  const title = t(`${featureNumber}.title`);
  const subtitle = t(`${featureNumber}.subtitle`);
  const description = t(`${featureNumber}.description`);

  return (
    <div className='w-full h-[95%] mx-auto bg-white shadow-md rounded-lg p-[12px] 3xl:p-6 mt-2 flex flex-col relative'>
      {/* Top Text */}
      {/* <p className='text-sm uppercase tracking-widest text-neutral-800 z-10'> */}
      {/* {topText} */}
      {/* </p> */}

      {/* Main Content */}
      <div className='flex flex-col items-start justify-between mt-1'>
        <h3 className='h3 mt-3 mb-7 text-neutral-950 z-20'>{title}</h3>
        <h4 className='h4 font-normal text-neutral-700 mb-2 font-oswald tracking-[0.020em]'>
          {subtitle}
        </h4>
        <p className='p flex flex-1 text-neutral-600 min-h-[110px] mb-4 font-light'>
          {description}
        </p>
      </div>

      {/* Feature Number */}
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, delay: index * 0.4 }}
        className='h-[100%] text-[140px] font-light text-neutral-300 text-opacity-30 absolute bottom-[-40px] right-[7px] overflow-visible'
      >
        {`0${featureNumber}`}
      </motion.p>
    </div>
  );
};

export default FeaturesCard;
