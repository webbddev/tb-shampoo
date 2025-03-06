'use client';

import Image from 'next/image';
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
      className='relative h-[440px] lg:h-[848px] xl:h-screen 2xl:h-[1048px] 3xl:h-[1203px] mt-[120px] lg:mt-[150px]'
    >
      <Image
        src='/img/hero/13-col-pic.webp'
        alt='Hero background'
        fill
        priority
        className='object-cover'
        sizes='100vw'
      />
      <motion.div
        variants={container}
        initial='hidden'
        whileInView={'show'}
        className='container mx-auto flex items-center justify-between lg:h-full relative z-10'
      >
        {/* Text container with backdrop filter */}
        <motion.div
          variants={fadeIn('down')}
          className='flex flex-col items-center mx-auto text-black/85 text-left p-7 mt-2 md:mt-20 rounded-lg backdrop-filter backdrop-blur-lg bg-stone-200/30 border border-emerald-500/20 shadow-xl lg:absolute lg:top-[130px] md:text-left lg:max-w-[600px] xl:max-w-[500px] xl:right-[-28px] 2xl:max-w-[550px] 2xl:right-[16px] 2xl:top-[250px] 3xl:right-[32px]'
        >
          <motion.h1 variants={fadeIn('down')} className='h1 mb-5 ml-0'>
            {t('title')}
          </motion.h1>

          <motion.h4
            variants={fadeIn('left')}
            className='h4 font-light mb-8 lg:mb-[48px] max-w-lg xl:max-w-xl 2xl:max-w-xl leading-8 xl:text-[20px] flex-wrap tracking-wider normal-case'
          >
            {t('subtitle')}
            <div className='font-medium mt-4 text-black/90 tracking-wide italic'>
              {t('subtitle2')}
            </div>
          </motion.h4>
        </motion.div>

        {/* sliding text */}
        {/* <motion.div
          variants={fadeIn('right')}
          viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex absolute -bottom-2 right-0 left-0 before:content-outlineText xl:pb-2'
        ></motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
