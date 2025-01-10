// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';

// const ProductImages = () => {
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

//         {/* Main Products Grid */}
//         <motion.div
//           variants={fadeIn('right')}
//           className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'
//         >
//           {[1, 2].map((index) => (
//             <div
//               key={index}
//               className='relative h-[380px] lg:h-[480px] 2xl:h-[580px]'
//             >
//               <Image
//                 src={`https://tools-api.webcrumbs.org/image-placeholder/580/380/abstract/${index}`}
//                 alt={`Product ${index}`}
//                 fill
//                 className='object-cover rounded-[18px]'
//                 sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//               />
//             </div>
//           ))}
//         </motion.div>

//         {/* Additional Products Section */}
//         <motion.h3
//           variants={fadeIn('up')}
//           className='h3 text-gray-800 font-oswald mb-8'
//         >
//           Additional Products
//         </motion.h3>

//         <motion.div
//           variants={fadeIn('left')}
//           className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
//         >
//           {[3, 4, 5].map((index) => (
//             <div
//               key={index}
//               className='relative h-[280px] lg:h-[380px] 2xl:h-[480px]'
//             >
//               <Image
//                 src={`https://tools-api.webcrumbs.org/image-placeholder/380/280/abstract/${index}`}
//                 alt={`Product ${index}`}
//                 fill
//                 className='object-cover rounded-[18px]'
//                 sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
//               />
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default ProductImages;
