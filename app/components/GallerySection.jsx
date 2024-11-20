'use client';

import { useState } from 'react';
import NextJsImage from './NextJsImage';
// import motion & fadeIn
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import data
import { galleryData } from '../../data';
// import photo album & lightbox
import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
// lightbox css
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const GallerySection = () => {
  // State variables
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Destructure galleryData
  const { title, btnText, btnIcon, images } = galleryData;

  // Prepare photos array for the PhotoAlbum component
  const photos = images.map(({ src, original, width, height }) => ({
    src,
    original,
    width,
    height,
  }));

  // Handler function for clicking an image
  const handleImageClick = (event, photo, index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id='gallery'
      className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'
    >
      <div className='container mx-auto'>
        {/* Title */}
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[370px] lg:mb-20'
        >
          {title}
        </motion.h2>
      </div>

      {/* Photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='mb-8 lg:mb-20'
      >
        <PhotoAlbum
          onClick={handleImageClick}
          layout='rows'
          photos={photos}
          renderPhoto={NextJsImage}
        />

        <Lightbox
          open={lightboxOpen}
          slides={images.map(({ original }) => original)}
          styles={{
            container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
            content: { maxWidth: '90vw', maxHeight: '90vh' },
          }}
          close={() => setLightboxOpen(false)}
          index={currentIndex}
          plugins={[Slideshow, Thumbnails]}
        />
      </motion.div>

      {/* View All Button */}
      <motion.div
        variants={fadeIn('up')}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-center'
      >
        <button className='btn btn-lg btn-dark'>
          {btnText} <div className='text-xl'>{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  );
};

export default GallerySection;
