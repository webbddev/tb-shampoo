'use client';

import { useState } from 'react';
import { aboutData } from '../../data';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { IoMdArrowForward } from 'react-icons/io';

// import variants
import { fadeIn } from '../variants';

const About = () => {
  const { title, subtitle1, subtitle2, subtitle3, btnText, btnIcon } =
    aboutData;
  const [isButtonClicked, setIsButtonClicked] = useState(false);
    const t = useTranslations('about');


  return (
    <section id='about' className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto  2xl:w-[1360px] 3xl:w-[1410px]'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          {/* numbers */}
          <motion.div
            variants={fadeIn('right')}
            // initial='visible'
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div className='text-[300px] xl:text-[460px] 2xl:text-[500px] leading-none font-rozha lg:-tracking-[0.021em]  bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent overflow-visible'>
              TB
            </div>
            {/* <div className='text-[300px] xl:text-[520px] 2xl:text-[720px] leading-none font-rozha lg:-tracking-[0.055em] bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent max-w-max'>
              TB
            </div> */}
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='h2'>{t('title')}</h2>
            <div className='flex flex-col items-end'>
              <div className='font-light max-w-[590px] text-grey'>
                <p className='mb-6'>{t('subtitle1')}</p>
                <p className='mb-9'>{t('subtitle2')}</p>
                {isButtonClicked ? (
                  <p className='mb-9'>{t('subtitle3')}</p>
                ) : (
                  <button
                    className='btn btn-lg btn-link font-normal'
                    onClick={() => setIsButtonClicked(true)}
                    aria-label='Reveal More Text'
                  >
                    {t('btnText')}{' '}
                    <div className='text-xl'>{<IoMdArrowForward/>}</div>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
