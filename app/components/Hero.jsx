'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { IoMdArrowForward } from 'react-icons/io';
import { fadeIn } from '../variants';

const container = {
  hidden: { display: '' },
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section
      id='home'
      className='bg-hero_img bg-cover bg-center h-[440px] lg:h-[848px] xl:h-screen 2xl:h-[1048px] 3xl:h-[1203px] bg-no-repeat mt-[120px] lg:mt-[150px]'
    >
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto flex items-center justify-between lg:h-full relative z-10'
      >
        {/* Text container with backdrop filter */}
        <motion.div
          variants={fadeIn('down')}
          className='flex flex-col items-center mx-auto text-white text-center p-6 mt-2 md:mt-20 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 bg-gray-500 shadow-2xl   lg:absolute lg:top-[130px] lg:text-left lg:max-w-[600px] xl:max-w-[500px] xl:right-[-28px] 2xl:max-w-[550px] 2xl:right-[16px] 2xl:top-[250px] 3xl:right-[32px]'
        >
          <motion.h1 variants={fadeIn('down')} className='h1 mb-4'>
            {t('title')}
          </motion.h1>
          <motion.p
            variants={fadeIn('left')}
            className='font-thin mb-8 lg:mb-[48px] max-w-lg xl:max-w-xl 2xl:max-w-xl leading-relaxed xl:text-[20px]'
          >
            {t('subtitle')}
          </motion.p>
          <motion.div variants={fadeIn('up')}>
            <button className='btn btn-sm lg:btn-lg btn-outline mx-auto'>
              {t('btnText')} <div>{<IoMdArrowForward/>}</div>
            </button>
          </motion.div>
        </motion.div>

        {/* sliding text */}
        <motion.div
          variants={fadeIn('right')}
          viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex absolute -bottom-2 right-0 left-0 before:content-outlineText xl:pb-2'
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
