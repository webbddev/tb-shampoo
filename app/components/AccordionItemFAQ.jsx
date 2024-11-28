'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiPlus } from 'react-icons/fi';

const AccordionItemFAQ = ({ item, index }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const t = useTranslations('faqs');

  return (
    <div className="mx-auto md:w-[83vw] xl:w-[980px] 2xl:w-[70vw] 3xl:w-[55vw] border-b border-gray-600">
      <button
        className="w-full flex items-center justify-between ml-2 cursor-pointer py-4"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        aria-expanded={isAccordionOpen}
      >
        <h4 className="flex-1 h4 text-left">{t(`items.${index}.question`)}</h4>
        <div className={`transform transition-transform duration-500 ease-in-out ${isAccordionOpen ? 'rotate-180' : 'rotate-0'}`}>
          <FiPlus className="text-xl mr-2" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isAccordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 text-gray-700 font-secondary font-light text-xl mb-3">
          {t(`items.${index}.answer`)}
        </p>
      </div>
    </div>
  );
};

export default AccordionItemFAQ;
