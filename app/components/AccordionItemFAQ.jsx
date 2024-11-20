'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItemFAQ = ({  item, index }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const t = useTranslations('faqs');
  // const { question, answer } = item; // Destructure if needed

  return (
    <div className='mx-auto md:w-[83vw] xl:w-[980px] 2xl:w-[70vw] 3xl:w-[55vw] border-b border-gray-600'>
      
      <div
        className='flex items-center justify-between ml-2 cursor-pointer'
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <h2 className='flex-1 font-semibold py-2 mr-2'>
          {t(`items.${index}.question`)}
        </h2>
        {isAccordionOpen ? (
          <FiMinus className='text-xl mr-2' />
        ) : (
          <FiPlus className='text-xl mr-2' />
        )}
      </div>
      <AnimatePresence>
        {isAccordionOpen && (
          <motion.p
            className='my-2 px-4 mx-auto text-gray-300'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {t(`items.${index}.answer`)}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItemFAQ;