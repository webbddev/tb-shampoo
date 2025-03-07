'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FaPlay } from 'react-icons/fa';
import { interviewData } from '../../data';
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Interview = () => {
  const t = useTranslations('interview');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      id='interview'
      variants={fadeIn('up')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      className='bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col justify-center h-full'>
          <div className='flex flex-col items-start max-w-[880px]'>
            {/* title */}
            <motion.h3
              variants={fadeIn('down')}
              className='text-stone-100 text-[40px] lg:text-[55px] leading-[1.1] font-rozha -tracking-[1.3px] normal-case italic mb-8 backdrop-blur-sm bg-stone-700/40 p-6 rounded-lg drop-shadow-lg border border-white/40 max-w-[880px]'
            >
              {t('title')}
            </motion.h3>

            {/* <motion.div variants={fadeIn('down')}> */}
            {/* play btn */}
            {/* <div
                onClick={() => setIsOpen(true)}
                className='flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition'
              > */}
            {/* border */}
            {/* <div className='w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]'> */}
            {/* inner */}
            {/* <div className='w-full h-full rounded-full bg-white flex items-center justify-center'>
                    <div className='pl-1'>
                      <FaPlay />
                    </div>
                  </div>
                </div> */}
            {/* btn text */}
            {/* <div className='font-oswald uppercase'>{t('btnText')}</div>
              </div> */}
            {/* </motion.div> */}
            {/* modal video */}
            {/* <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isOpen}
              // videoId='_l1mqYQuNf8'
              videoId='hkJYj_g_pL8' // fisher - i'm losing it
              onClose={() => setIsOpen(false)}
            /> */}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
