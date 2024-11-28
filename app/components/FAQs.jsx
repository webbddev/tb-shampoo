'use client';

import { useTranslations } from 'next-intl';
import { faqQuestions } from '../../data';
import AccordionItemFAQ from './AccordionItemFAQ';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const FAQs = () => {
  const t = useTranslations('faqs');

  return (
    <section id='faqs' className='section'>
      <div className='container mx-auto'>
        {/* FAQ Title */}
        <motion.h2
          variants={fadeIn('up')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 max-w-[600px] text-gray-800 font-oswald mb-8 3xl:mb-16'
        >
          {t('title')}
        </motion.h2>
        {/* FAQ Items */}
        <div className='space-y-6'>
          {faqQuestions.map((item, index) => (
            <AccordionItemFAQ key={item.question} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
