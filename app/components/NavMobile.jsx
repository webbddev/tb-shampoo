import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

// import nav data
import { navLinksData, links } from '../../data';
// import components
import Socials from './Socials';

const NavMobile = ({ closeMobileMenu }) => {
  const t = useTranslations('Header');

  // destructure nav data
  // const { items } = navLinksData;
  return (
    <nav className='w-full h-full flex flex-col justify-evenly overflow-hidden'>
      <ul className='flex flex-col items-center justify-center gap-y-6 py-6 mb-8'>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className='text-2xl font-oswald uppercase'
                href={item.hash}
                onClick={closeMobileMenu}
              >
              {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='text-2xl lg:text-2xl'>
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
