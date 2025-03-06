'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import header data
import { headerData } from '../../data';
// import components
import NavLinks from './NavLinks';
import NavMobile from './NavMobile';
import Socials from './Socials';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setNavMobile(false); // Function to close the mobile menu
  };

  return (
    <header
      className={`${
        isActive ? 'h-[80px] lg:h-[80px] shadow-lg' : 'h-[120px] lg:h-[150px]'
      } fixed bg-white left-0 right-0 z-30 min-w-max w-full mx-auto transition-all duration-500`}
    >
      <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[90px] lg:pr-[90px] xl:pl-[100px] xl:pr-[100px] 2xl:pl-[180px] 2xl:pr-[180px]'>
        {/* logo */}
        <Link href='/'>
          <Image
            // className='w-[188px] h-[90px]'
            className='w-[110px] h-[50px] md:w-[114px] md:h-[70px] lg:w-[118px] lg:h-[70px] xl:w-[90px] xl:h-[80px] 2xl:w-[188px] 2xl:h-[90px]'
            src={logo}
            alt='logo'
            width={188}
            height={90}
          />
        </Link>
        {/* nav links - initially hidden, show on desktop */}
        <div className='hidden lg:flex mx-auto'>
          <NavLinks />
        </div>
        {/* hamburger menu icon - showing on screen sm-md, hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-2xl' />
        </div>
        {/* nav mobile - showing by default, hidden on desktop */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div>

        {/* Locale Switcher */}
        <LanguageSwitcher />

        {/* social icons - initially hidden - show on desktop */}
        <div className='hidden lg:flex'>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

// the code below works well. There is no reference to 'window' object made, yet the code returns an error.

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useWindowScroll } from 'react-use'; // Correct import statement
// // import header data
// import { headerData } from '../data';
// // import components
// import NavLinks from './NavLinks';
// import NavMobile from './NavMobile';
// import Socials from './Socials';
// // import icons
// import { TiThMenuOutline } from 'react-icons/ti';
// import Link from 'next/link';

// const Header = () => {
//   // destructure header data
//   const { logo } = headerData;
//   // header state
//   const [isActive, setIsActive] = useState(false);
//   // nav mobile state
//   const [navMobile, setNavMobile] = useState(false);

//   // scroll event
//   const { y } = useWindowScroll();

//   useEffect(() => {
//     if (y > 50) {
//       setIsActive(true);
//     } else {
//       setIsActive(false);
//     }
//   }, [y]);

//   const closeMobileMenu = () => {
//     setNavMobile(false); // Function to close the mobile menu
//   };

//   return (
//     <header
//       className={`${
//         isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
//       } fixed bg-white left-0 right-0 z-20 min-w-max w-full mx-auto transition-all duration-500`}
//     >
//       <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[100px] lg:pr-[100px] xl:pl-[140px] xl:pr-[140px] 2xl:pl-[180px] 2xl:pr-[180px]'>
//         {/* logo */}
//         <Link href='/'>
//           <Image
//             className='w-[188px] h-[90px]'
//             src={logo}
//             alt='logo'
//             width={188}
//             height={90}
//           />
//         </Link>
//         {/* nav - initially hidden, show on desktop */}
//         <div className='hidden lg:flex mx-auto'>
//           <NavLinks />
//         </div>
//         {/* hamburger menu icon - showing by default, hidden on desktop mode */}
//         <div
//           onClick={() => setNavMobile(!navMobile)}
//           className='lg:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
//         >
//           <TiThMenuOutline className='text-2xl' />
//         </div>
//         {/* nav mobile - showing by default, hidden on desktop */}
//         <div
//           className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
//             isActive
//               ? 'top-[100px] lg:top-[110px]'
//               : 'top-[120px] lg:top-[150px]'
//           } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
//         >
//           <NavMobile closeMobileMenu={closeMobileMenu} />
//         </div>
//         {/* social icons - initially hidden - show on desktop */}
//         <div className='hidden lg:flex'>
//           <Socials />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
