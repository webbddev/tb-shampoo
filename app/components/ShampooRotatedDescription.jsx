'use client';

import { shampooData } from '../../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ShampooRotatedDescription = () => {
  const { shampooImages } = shampooData;
  const t = useTranslations('shampooImages');

  return (
    <section id='about' className='py-5 lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto max-w-7xl'>
        <div className='flex flex-col gap-y-4'>
          {shampooImages.map((image, index) => {
            const isEven = index % 2 === 0;

            return (
              // Individual shampoo item container
              <div
                key={index}
                className='flex flex-col lg:flex-row lg:gap-x-[70px] lg:items-center'
              >
                <div
                  className={`flex flex-col lg:flex-row lg:gap-x-[70px] lg:items-center w-full`}
                >
                  {/* Description section with animation */}
                  {/* Uses fadeIn animation from left/right based on even/odd index */}
                  <motion.div
                    variants={fadeIn(isEven ? 'right' : 'left')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className={`flex-1 h-full flex flex-col mb-4 mt-28 lg:mb-0
                      ${isEven ? 'lg:order-2' : 'lg:order-1'} 
                      ${isEven ? 'lg:items-start' : 'lg:items-end'}`}
                  >
                    <h2
                      className={`h2 ${
                        isEven ? 'lg:ml-[-20px]' : 'lg:mr-[70px]'
                      }`}
                    >
                      {t(`${index}.descriptionTitle`)}
                    </h2>
                    <div
                      className={`flex flex-col ${
                        isEven ? 'items-start' : ''
                      } lg:mb-36`}
                    >
                      {/* Description text container */}
                      <div className='font-light max-w-[530px] text-grey'>
                        <p className='p mb-6'>{t(`${index}.description`)}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    variants={fadeIn(isEven ? 'left' : 'right')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className={`flex-1 w-full h-[50vh] lg:h-[80vh] mb-4 lg:mb-0  
                      ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <Image
                      src={image.src}
                      alt={t(`${index}.alt`)}
                      className='w-full h-full md:w-[77vw] md:mx-auto xl:w-[36vw] 2xl:h-[90%] 3xl:h-[90%] object-cover rounded-[18px] py-2'
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
