// import images
// import Logo from './public/img/header/logo_barber.svg';
import Logo from './public/img/header/logo.svg';
import GalleryImg1 from './public/img/gallery/1.png';
import GalleryImg2 from './public/img/gallery/2.png';
import GalleryImg3 from './public/img/gallery/3.png';
import GalleryImg4 from './public/img/gallery/4.png';
import GalleryImg5 from './public/img/gallery/5.png';
import GalleryImg6 from './public/img/gallery/6.png';
import GalleryImg7 from './public/img/gallery/7.png';
import GalleryImg8 from './public/img/gallery/8.png';
import GalleryImg9 from './public/img/gallery/kitchen.jpeg';
import QuoteImg from './public/img/testimonial/quote.svg';
// import shampoo images
import ShampooImg1 from './public/img/shampoo/1-shampoo.jpg';
import ShampooImg2 from './public/img/shampoo/2-shampoo.jpg';
import ShampooImg3 from './public/img/shampoo/3-shampoo.jpg';
import ShampooImg4 from './public/img/shampoo/4-shampoo.jpg';
import ShampooImg5 from './public/img/shampoo/5-shampoo.jpg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

// data.js

// While both href and hash can be used to link to sections within a page, href is more general and widely recognized in HTML contexts. hash, on the other hand, is more specific to fragment identifiers and is commonly used in JavaScript and routing scenarios. For the sake of consistency and clarity, choose the one that best fits your application's context and the conventions used in your codebase.

// export const navLinksData = {
//   items: [
//     { href: '#home', name: 'Home' },
//     { href: '#about', name: 'About' },
//     { href: '#gallery', name: 'Gallery' },
//     { href: '#interview', name: 'Interview' },
//     { href: '#articles', name: 'Articles' },
//     { href: '#contact', name: 'Contact' },
//   ]
// };

// GOOD CODE BELOW
// export const links = [
//   {
//     name: 'home',
//     hash: '#home',
//   },
//   {
//     name: 'about',
//     hash: '#about',
//   },
//   {
//     name: 'gallery',
//     hash: '#gallery',
//   },
//   {
//     name: 'interview',
//     hash: '#interview',
//   },
//   {
//     name: 'articles',
//     hash: '#articles',
//   },
//   {
//     name:'faqs',
//     hash:'#faqs',
//   },
//   {
//     name: 'contact',
//     hash: '#contact',
//   },
// ];

// i18-related
export const links = [
  {
    key: 'home',
    hash: '#home',
  },
  {
    key: 'about',
    hash: '#about',
  },
  {
    key: 'gallery',
    hash: '#gallery',
  },
  {
    key: 'interview',
    hash: '#interview',
  },
  {
    key: 'faqs',
    hash: '#faqs',
  },
  {
    key: 'contact',
    hash: '#contact',
  },
];

export const socialData = [
  { href: '#', icon: <GrFacebookOption /> },
  { href: '#', icon: <IoLogoInstagram /> },
  { href: '#', icon: <IoLogoPinterest /> },
  { href: '#', icon: <IoLogoTwitter /> },
  { href: '#', icon: <IoLogoYoutube /> },
];

// Hero section related data
export const heroData = {
  title: 'I’m Manu, Sir.',
  subtitle: [
    'I’m a professional tattoo artist. I have been tattooing for 10 years.',
    ' Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  ],
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

// Features section related data
export const features = [
  {
    topText: 'Every Wash Matters',
    title: 'Nourishment',
    subtitle: 'Hydrate Your Hair',
    description:
      'Experience the ultimate hydration with our nourishing shampoo, formulated to deeply moisturize and revitalize your hair.',
    featureNumber: 1,
  },
  {
    topText: 'Every Wash Matters',
    title: 'Cleansing',
    subtitle: 'Cleanse Without Stripping',
    description:
      'Our gentle formula cleanses your hair without stripping away its natural oils, leaving it soft and manageable.',
    featureNumber: 2,
  },
  {
    topText: 'Every Wash Matters',
    title: 'Volume',
    subtitle: 'Boost Your Volume',
    description:
      'Add volume and bounce to your hair with our volumizing shampoo, designed to lift your roots and create a fuller, more voluminous look.',
    featureNumber: 3,
  },
  {
    topText: 'Every Wash Matters',
    title: 'Color Protection',
    subtitle: 'Preserve Your Color',
    description:
      'Maintain the vibrancy of your color-treated hair with our color-protecting shampoo, formulated to lock in color and prevent fading.',
    featureNumber: 4,
  },
  {
    topText: 'Every Wash Matters',
    title: 'Reparation',
    subtitle: 'Restore Your Hair',
    description:
      'Repair damaged hair and restore its strength and shine with our damage-repairing shampoo, enriched with nourishing ingredients.',
    featureNumber: 5,
  },
  {
    topText: 'Every Wash Matters',
    title: 'Scalp Health',
    subtitle: 'Soothe and Balance',
    description:
      'Maintain a healthy scalp with our gentle, soothing shampoo, formulated to reduce irritation and promote hair growth.',
    featureNumber: 6,
  },
];

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  subtitle3:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const shampooData = {
  title: 'My Product:',
  shampooImages: [
    {
      src: ShampooImg1,
      alt: 'Shampoo 1',
      descriptionTitle: 'Botanical Shine',
      description:
        'Revitalize your hair with our botanical-infused shampoo, designed to restore natural shine and promote healthy, voluminous locks.',
    },
    {
      src: ShampooImg2,
      alt: 'Shampoo 2',
      descriptionTitle: 'Deep Hydration',
      description:
        'Experience deep hydration with this nourishing shampoo, enriched with natural oils to strengthen and protect dry or damaged hair.',
    },
    {
      src: ShampooImg3,
      alt: 'Shampoo 3',
      descriptionTitle: 'Clarifying Cleanse',
      description:
        'A clarifying shampoo that removes build-up and impurities, leaving your scalp refreshed and hair clean without stripping natural moisture.',
    },
    {
      src: ShampooImg4,
      alt: 'Shampoo 4',
      descriptionTitle: 'Color Care',
      description:
        'This gentle, sulfate-free formula is perfect for color-treated hair, preserving vibrancy while keeping your strands soft and smooth.',
    },
  ],
};

// FAQs
export const faqQuestions = [
  {
    question: 'How often should I use shampoo?',
    answer:
      "It's generally recommended to wash your hair with shampoo 2-3 times per week. However, this may vary depending on your hair type and lifestyle. Those with oily hair might shampoo daily, while those with dry or curly hair may shampoo less often.",
  },
  {
    question: 'Should I apply shampoo to dry or wet hair?',
    answer:
      'Always apply shampoo to wet hair. Start by thoroughly soaking your hair with water before applying shampoo to ensure it lathers well and cleans effectively.',
  },
  {
    question: 'How much shampoo should I use?',
    answer:
      'Use a coin-sized amount for short hair, and adjust the amount based on your hair length and thickness. Using too much can leave residue, while too little may not clean adequately.',
  }
];

// Gallery with images
export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 465,
      height: 540,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "This shampoo is simply magical! My hair has become thicker, softer, and more manageable. I'm very happy with the results. I recommend it to everyone!",
    name: 'Olga',
    occupation: 'Stylist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

// Footer section related data

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '#about', name: 'About me' },
      { href: '#gallery', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '#contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
