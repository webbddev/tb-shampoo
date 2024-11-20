import { useTranslations } from 'next-intl';
import { faqQuestions } from '../../data';
import AccordionItemFAQ from './AccordionItemFAQ';

const FAQs = () => {
  const t = useTranslations('faqs');

  return (
    <section
      id='faqs'
      className='section bg-white text-white bg-gradient-to-b from-[#beca91] to-[#3B5F04] py-[72px]'
      // className='section bg-white text-white bg-gradient-to-b from-[#a5b270] to-[#3B5F04] py-[72px]'
    >
      <div className='mx-auto container'>
        {/* FAQ Title */}
        <h2 className='h2 max-w-[600px] text-gray-800 font-oswald mb-6'>
          {t('title')}
        </h2>
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
