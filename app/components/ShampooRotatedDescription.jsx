'use client';

import { shampooData } from '../../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ShampooRotatedDescription = () => {
  const t = useTranslations('shampooImagesSection');

  return (
    <section className='section'>
      <div className='container mx-auto'>
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

      <div className='container mx-auto lg:w-[990px] 2xl:w-[1360px] 3xl:w-[1410px]'>
        <div className='flex flex-col gap-y-4 md:gap-y-16 lg:gap-y-20'>
          {shampooData.shampooImages.map((image, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className='flex flex-col lg:flex-row lg:gap-x-16 lg:items-center'
              >
                <div
                  className={`flex flex-col lg:flex-row lg:gap-x-16 lg:items-center w-full`}
                >
                  {/* Text content container with conditional ordering */}
                  <motion.div
                    variants={fadeIn(isEven ? 'right' : 'left')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className={`flex-1 flex flex-col mb-6 lg:mb-0
                        ${isEven ? 'lg:order-2' : 'lg:order-1'} 
                        ${isEven ? 'lg:items-start' : 'lg:items-end'}`}
                  >
                    {/* Description title with conditional positioning */}
                    <h2
                      className={`h3 mb-6 ${
                        isEven
                          ? 'lg:ml-[-20px] max-w-[510px]'
                          : 'lg:mr-[120px] max-w-[510px]'
                      }`}
                    >
                      {t(`images.${index}.descriptionTitle`)}
                    </h2>

                    {/* Mobile-only image that appears between title and description */}
                    <div className='w-full mb-8 lg:hidden '>
                      <Image
                        src={image.src}
                        alt={t(`images.${index}.alt`)}
                        className='w-full h-[60vh] object-cover rounded-[18px]'
                        width={600}
                        height={600}
                        sizes='100vw'
                      />
                    </div>

                    {/* Description content container */}
                    <div
                      className={`flex flex-col ${
                        isEven ? 'items-start' : ''
                      } lg:mb-40`}
                    >
                      <div className='mx-auto font-light max-w-full md:max-w-[90%] text-grey'>
                        {/* Description subtitle */}
                        <h4 className='h4 mb-6'>
                          {t(`images.${index}.descriptionSubtitle`)}
                        </h4>
                        {/* Description paragraphs */}
                        <p className='p mb-6'>
                          {t(`images.${index}.description1`)}
                        </p>
                        <p className='p mb-6'>
                          {t(`images.${index}.description2`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Desktop-only image container with conditional ordering */}
                  <motion.div
                    variants={fadeIn(isEven ? 'left' : 'right')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className={`flex-1 w-full mb-0 lg:mb-0 hidden lg:block
                          ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    {/* Image container with aspect ratio */}
                    <div className='w-full h-full aspect-[3/4]'>
                      <Image
                        src={image.src}
                        alt={t(`images.${index}.alt`)}
                        className='w-full h-full object-cover rounded-[18px]'
                        width={1000}
                        height={1000}
                        sizes='(min-width: 1024px) 50vw, 100vw'
                      />
                    </div>
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
