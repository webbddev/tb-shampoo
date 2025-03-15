'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useTranslations } from 'next-intl';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { navConfig } from '../utils/navConfig';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const Footer = () => {
  const t = useTranslations('footer');

  const links = navConfig.items.map((item) => ({
    href: item.hash,
    name: t(`links.items.${item.key}.name`),
  }));

  const workingHours = [
    { name: t('program.items.0.name') },
    { name: t('program.items.1.name') },
    { name: t('program.items.2.name') },
    { name: t('program.items.3.name') },
    { name: t('program.items.4.name') },
    { name: t('program.items.5.name') },
  ];

  return (
    <footer className='section bg-dark'>
      <div className='container mx-auto'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.1 }}
          className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'
        >
          {/* About Section */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            <div className='font-oswald text-xl uppercase tracking-[0.08em]'>
              {t('about.title')}
            </div>
            <div className='font-thin leading-relaxed text-[#dbdbdb]'>
              {t('about.subtitle')}
            </div>
            <div className='flex flex-col gap-y-4 font-medium text-[#dbdbdb]'>
              <div className='flex items-center gap-x-[10px]'>
                <FaMapMarkerAlt />
                <div>{t('about.address.name')}</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <FaPhoneAlt />
                <div>{t('about.phone.number')}</div>
              </div>
              <div className='flex items-center gap-x-[10px]'>
                <FaEnvelope />
                <div>{t('about.email.address')}</div>
              </div>
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            variants={fadeIn('up')}
            className='flex-1 flex flex-col gap-y-6'
          >
            <div>
              <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
                {t('links.title')}
              </div>
              <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
                {links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className='hover:text-white transition'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {t('program.title')}
            </div>
            <ul className='font-thin flex flex-col gap-y-4 text-[#dbdbdb]'>
              {workingHours.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          {/* <motion.div variants={fadeIn('up')} className='flex-1'>
            <div className='font-oswald text-xl uppercase tracking-[0.08em] mb-6'>
              {t('newsletter.title')}
            </div>
            <div className='font-thin leading-relaxed mb-9 text-[#dbdbdb]'>
              {t('newsletter.subtitle')}
            </div>
            <form className='flex justify-between items-start border-b border-[#090707]'>
              <input
                className='font-thin outline-none placeholder:text-base italic placeholder:capitalize bg-transparent pb-2'
                placeholder={t('newsletter.form.placeholder')}
                type='text'
              />
              <button className='text-2xl cursor-pointer' type='submit'>
                <FiSend />
              </button>
            </form>
          </motion.div> */}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
