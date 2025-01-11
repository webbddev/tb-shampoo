'use client';

import { useTranslations } from 'next-intl';
import AccordionItemFAQ from './AccordionItemFAQ';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const FAQs = () => {
  const t = useTranslations('faqs');
  const faqItems = t.raw('items');

  return (
    <section id='faqs' className='section'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[600px] text-gray-800 font-oswald mb-8 3xl:mb-16'
        >
          {t('title')}
        </motion.h2>
        <div className='space-y-6'>
          {faqItems.map((faqItem, index) => (
            <AccordionItemFAQ
              key={faqItem.question}
              item={faqItem}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
