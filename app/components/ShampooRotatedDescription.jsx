'use client';

import { shampooData } from '../../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ShampooRotatedDescription = () => {
  const t = useTranslations('shampooImagesSection');

  return (
    <section className='py-5 lg:py-16 xl:pb-[160px]'>
      <div className='section container mx-auto py-6'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[1030px] text-gray-800 font-oswald mb-7 3xl:mb-24'
        >
          {t('title')}
        </motion.h2>
      </div>

      <div className='container mx-auto 2xl:w-[1360px] 3xl:w-[1410px]'>
        <div className='flex flex-col gap-y-4'>
          {shampooData.shampooImages.map((image, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className='flex flex-col lg:flex-row lg:gap-x-[70px] lg:items-center'
              >
                <div
                  className={`flex flex-col lg:flex-row lg:gap-x-[70px] lg:items-center w-full`}
                >
                  <motion.div
                    variants={fadeIn(isEven ? 'right' : 'left')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className={`flex-1 h-full flex flex-col mb-4 mt-0 lg:mb-0
                      ${isEven ? 'lg:order-2' : 'lg:order-1'} 
                      ${isEven ? 'lg:items-start' : 'lg:items-end'}`}
                  >
                    <h2
                      className={`h3 mb-12  ${
                        isEven
                          ? 'lg:ml-[-20px] max-w-[510px]'
                          : 'lg:mr-[70px] max-w-[510px]'
                      }`}
                    >
                      {t(`images.${index}.descriptionTitle`)}
                    </h2>

                    <div
                      className={`flex flex-col ${
                        isEven ? 'items-start' : ''
                      } lg:mb-36`}
                    >
                      <div className='font-light max-w-[530px] text-grey'>
                        <h4 className='h4 mb-6'>
                          {t(`images.${index}.descriptionSubtitle`)}
                        </h4>
                        <p className='p mb-6'>
                          {t(`images.${index}.description1`)}
                        </p>
                        <p className='p mb-6'>
                          {t(`images.${index}.description2`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn(isEven ? 'left' : 'right')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`flex-1 w-full h-[50vh] lg:h-[80vh] mb-4 lg:mb-0  
                      ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <Image
                      src={image.src}
                      alt={t(`images.${index}.alt`)}
                      className='w-full h-full md:w-[77vw] md:mx-auto xl:w-[36vw] 2xl:h-[90%] 3xl:h-[90%] object-cover rounded-[18px] py-2'
                      width={1000}
                      height={1000}
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShampooRotatedDescription;
