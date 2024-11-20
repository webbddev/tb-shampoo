import { useTranslations } from 'next-intl';
import { navConfig } from '../../utils/navConfig';
import { Link } from '../../i18n/routing';


const NavLinks = () => {
  const t = useTranslations('Header');

  return (
    <nav>
      <ul className='flex gap-x-[18px] md:gap-x-[12px] lg:gap-x-6 xl:gap-x-11 md:p-5 text-sm md:text-[16px] lg:text-[18px] 3xl:text-[22px] 3xl:gap-x-12'>
        {navConfig.items.map((item, index) => (
          <li key={index}>
            <Link href={item.hash} className='link hover:border-b hover:border-dark transition duration-300'>
              {t(item.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

// import { useTranslations } from 'next-intl';
// import { links } from '../../data';
// import { Link } from '../../i18n/routing';

// const NavLinks = () => {
//   const t = useTranslations('Header');

//   return (
//     <nav>
//       <ul className='flex gap-x-[18px] md:gap-x-[12px] lg:gap-x-6 xl:gap-x-11 md:p-5 text-sm md:text-[16px] lg:text-[18px] 3xl:text-[22px] 3xl:gap-x-12'>
//         {links.map((item, index) => (
//           <li key={index}>
//             <Link
//               className='link hover:border-b hover:border-dark transition duration-300'
//               href={item.hash}
//             >
//               {t(item.key)}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default NavLinks;
