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
  ProductsRange,
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
    <main className='mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <Features />
      <ShampooRotatedDescription />
      <Interview />
      <About />
      <ProductsRange />
      <Testimonial />
      {/* <GallerySection />  */}
      {/* <Skills /> */}
      <Contact />
      <DynamicMap />
      <FAQs />
      <Footer />
      <Copyright />
    </main>
  );
}
