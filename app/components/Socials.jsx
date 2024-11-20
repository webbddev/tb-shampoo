import React from 'react';
import Link from 'next/link';

// import social data
import { socialData } from '../../data';

const Socials = () => {
  return (
    <ul className='flex justify-center items-center gap-x-[8px] xl:gap-x-[20px] md:text-sm xl:text-2xl ml-2 xl:ml-0'>
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>{item.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
