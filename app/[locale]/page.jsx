import dynamic from 'next/dynamic';

import {
  Header,
  About,
  Features,
  FAQs,
  // ProductDescriptionGallery,
  ShampooRotatedDescription,
  Contact,
  GallerySection,
  Hero,
  Interview,
  Skills,
  Testimonial,
  ProductImages,
  Footer,
  Copyright,
} from '../components';
import Loading from '../components/loading';

export default function Home() {
  const DynamicMap = dynamic(() => import('../components/Map'), {
    loading: () => <Loading />,

    ssr: false,
  });

  return (
    <main className='w-full max-w-full mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <Features />
      <About />
      <Interview />
      <ShampooRotatedDescription />
      <ProductImages />
      <FAQs />
      {/* <GallerySection />  */}
      {/* <Skills /> */}
      <Testimonial />
      <Contact />
      <DynamicMap />
      <Footer />
      <Copyright />
    </main>
  );
}
