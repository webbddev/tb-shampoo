'use client';

import React from 'react';
import FeaturesCard from './FeaturesCard';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import FlourishIcon from '../assets/FlourishIcon';

const Features = () => {
  const features = [1, 2, 3, 4, 5, 6]; // List of feature numbers
  const t = useTranslations('features');

  return (
    <section id='features' className='section container mx-auto py-6 '>
      {/* Features Title */}
      <motion.h2
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='h2 text-left max-w-[930px] text-gray-800 font-oswald mb-14 3xl:mb-40'
      >
        {t('title')}
      </motion.h2>

      {/* <FlourishIcon /> */}

      <div className='3xl:w-[1600px] mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((featureNumber, index) => (
          <FeaturesCard
            key={index}
            featureNumber={featureNumber}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
