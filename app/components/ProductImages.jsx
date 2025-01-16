'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ShampooImg5 from '../../public/img/shampoo/5-shampoo.jpg';
import { useTranslations } from 'next-intl';

const ProductImages = () => {
  const t  = useTranslations('productImages')
  
  return (
    <section className='section lg:py-[20px] container mx-auto'>
      <motion.h2
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='h2 max-w-[640px] text-gray-800 font-oswald mb-7 3xl:mb-24'
      >
          {t('title')}
      </motion.h2>

      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.4 }}
        className='flex flex-col gap-4 max-w-7xl 2xl:w-[1360px] 3xl:w-[1410px] mx-auto'
      >
        {/* Top row: 2 larger images */}
        <div className='grid md:grid-cols-2 gap-4 md:h-[460px] lg:h-[600px]'>
          <motion.div className='relative w-full h-[300px] md:h-full'>
            <Image
              src={ShampooImg5}
              alt='Product 1'
              fill
              className='object-cover h-full w-full rounded-lg shadow-lg'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>

          <motion.div className='relative w-full h-[300px] md:h-full'>
            <Image
              src={ShampooImg5}
              alt='Product 2'
              fill
              className='object-cover h-full w-full rounded-lg shadow-lg'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </motion.div>
        </div>

        <h4 class='flex-1 h4 font-oswald uppercase tracking-wide text-left lg:ml-[-20px] mt-4'>
{t('subTitle')}
   </h4>

        {/* Bottom row: 3 smaller images */}
        <div className='grid grid-cols-3 gap-4'>
          <motion.div
            className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'
          >
            <Image
              src={ShampooImg5}
              alt='Product 3'
              fill
              className='object-cover h-full w-full rounded-lg shadow-md'
              sizes='(max-width: 768px) 33vw, 20vw'
            />
          </motion.div>
          <motion.div
            className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'
          >
            <Image
              src={ShampooImg5}
              alt='Product 4'
              fill
              className='object-cover h-full w-full rounded-lg shadow-md'
              sizes='(max-width: 768px) 33vw, 20vw'
            />
          </motion.div>
          <motion.div
            className='relative w-full h-[150px] md:h-[300px] lg:h-[400px]'
          >
            <Image
              src={ShampooImg5}
              alt='Product 5'
              fill
              className='object-cover h-full w-full rounded-lg shadow-md'
              sizes='(max-width: 768px) 33vw, 20vw'
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductImages;

// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import { shampooData } from '../../data';
// import ShampooImg5 from '../../public/img/shampoo/5-shampoo.jpg';

// const ProductImages = () => {
//   const { shampooImages } = shampooData;
//   const topRowImages = shampooImages.slice(0, 2);
//   const bottomRowImages = [
//     ...shampooImages.slice(2, 4),
//     { src: ShampooImg5, alt: 'Shampoo 5', descriptionTitle: 'Extra Care' },
//   ];

//   return (
//     <section className='section container mx-auto'>
//       <motion.div
//         variants={fadeIn('up')}
//         initial='hidden'
//         whileInView={'show'}
//         viewport={{ once: false, amount: 0.6 }}
//         className='max-w-7xl mx-auto py-6'
//       >
//         <motion.h2
//           variants={fadeIn('down')}
//           className='h2 text-gray-800 font-oswald mb-8 3xl:mb-16'
//         >
//           Gallery
//         </motion.h2>
//         {/* Top Row - 2 Large Images */}
//         <motion.div
//           variants={fadeIn('right')}
//           className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'
//         >
//           {topRowImages.map((product, index) => (
//             <div key={index} className='relative h-[480px] lg:h-[580px]'>
//               <Image
//                 src={product.src}
//                 alt={product.alt}
//                 fill
//                 className='object-cover rounded-[18px]'
//                 sizes='(max-width: 768px) 100vw, 50vw'
//                 priority
//               />
//             </div>
//           ))}
//         </motion.div>
//         <p>Clients also by the following</p>
//         {/* Bottom Row - 3 Images */}
//         <motion.div
//           variants={fadeIn('left')}
//           className='grid grid-cols-1 md:grid-cols-3 gap-6'
//         >
//           {bottomRowImages.map((product, index) => (
//             <div
//               key={`bottom-${index}`}
//               className='relative h-[380px] lg:h-[480px]'
//             >
//               <Image
//                 src={product.src}
//                 alt={product.alt}
//                 fill
//                 className='object-cover rounded-[18px] transition-transform duration-300'
//                 sizes='(max-width: 768px) 100vw, 33vw'
//               />
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ProductImages;
