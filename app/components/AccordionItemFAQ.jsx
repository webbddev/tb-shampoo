'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const AccordionItemFAQ = ({ item, index }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <div className='mx-auto md:w-[83vw] xl:w-[980px] 2xl:w-[70vw] 3xl:w-[55vw] border-b border-gray-600'>
      <div
        className='w-full flex items-center justify-between cursor-pointer py-4'
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        aria-expanded={isAccordionOpen}
      >
        {/* Question text */}
        <h4 className='flex-1 h4 font-oswald uppercase tracking-wide text-left'>
          {item.question}
        </h4>
        {/* Icon container */}
        <div
          className={`transform transition-transform duration-300 ease-in-out ${
            isAccordionOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <FiPlus className='text-xl align-baseline' />
        </div>
      </div>
      {/* Expandable content section with smooth height transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isAccordionOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Answer text */}
        <p className='px-4 text-gray-700 font-secondary font-light text-lg mb-3'>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItemFAQ;
