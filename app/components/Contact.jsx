'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
// translations
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { sendEmail } from '../../actions/sendEmail';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const t = useTranslations('contact');
  const formRef = useRef(null); // Reference to the form element for manual reset
  const { pending } = useFormStatus();
  // State to manage form submission status and prevent multiple submissions
  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices = ['kis'];

  const handleSubmit = async (formData) => {
    try {
      // Prevent multiple submissions
      setIsSubmitting(true);
      // Attempt to send email
      const senderName = formData.get('senderName');
      const { data, error } = await sendEmail(formData);

      if (error) {
        toast.error(t('notifications.error'));
        return;
      }

      toast.success(t('notifications.success', { name: senderName }));
      formRef.current?.reset();
    } catch (error) {
      toast.error(t('notifications.error'));
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-y-16'>
          {/* text */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1'
          >
            {/* title */}
            <h2 className='h2 max-w-[490px]'>{t('title')}</h2>
            {/* info items */}
            <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
              {offices.map((office) => (
                <div key={office}>
                  {/* title */}
                  <div className='font-oswald uppercase font-medium text-xl mb-3'>
                    {t(`offices.${office}.title`)}
                  </div>
                  {/* subtitle */}
                  <div className='font-thin mb-6 text-[#333] leading-[187%] tracking-[0.02em] max-w-lg'>
                    {t(`offices.${office}.subtitle`)}
                  </div>
                  {/* address, phone & email */}
                  <div className='flex flex-col gap-y-3 mb-8'>
                    {/* address */}
                    <div className='font-medium flex items-center gap-[10px]'>
                      <FaMapMarkerAlt />
                      <div>{t(`offices.${office}.address`)}</div>
                    </div>
                    {/* phone */}
                    <div className='flex items-center gap-[10px]'>
                      <FaPhoneAlt />
                      <div>{t(`offices.${office}.phone`)}</div>
                    </div>
                    {/* email */}
                    <div className='flex items-center gap-[10px]'>
                      <FaEnvelope />
                      <div>{t(`offices.${office}.email`)}</div>
                    </div>
                  </div>
                  {/* get location link */}
                  <Link
                    className='font-thin border-b border-dark pb-[5px]'
                    href='#'
                  >
                    {t(`offices.${office}.link`)}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>

          {/* contact form */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='flex-1 xl:pl-[40px] flex justify-center items-end'
          >
            <form
              ref={formRef}
              className='flex flex-col gap-y-6 w-full font-thin'
              action={handleSubmit}
              onSubmit={(e) => {
                // Prevent form submission if already submitting
                if (isSubmitting) {
                  e.preventDefault();
                }
              }}
            >
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='senderName'
                placeholder={t('form.name')}
                type='text'
                disabled={isSubmitting}
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='senderEmail'
                placeholder={t('form.email')}
                type='email'
                // required
                disabled={isSubmitting}
              />
              <textarea
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='message'
                placeholder={t('form.message')}
                // required
                maxLength={5000}
                disabled={isSubmitting}
              />
              {/* button */}
              <button
                type='submit'
                disabled={isSubmitting || pending}
                className='btn btn-sm btn-dark self-start group flex items-center gap-2 disabled:opacity-65'
              >
                {isSubmitting || pending ? (
                  <div className='h-4 w-4 animate-spin rounded-full border-b-2 border-white'></div>
                ) : (
                  <>
                    {t(`form.btnText`)}
                    <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// code below worked well while in development, but the page was switching to blanc when submitting the form when hosted on Vercel. the above code fixed an issue
// 'use client';

// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaPaperPlane,
// } from 'react-icons/fa';
// import { sendEmail } from '../../actions/sendEmail';
// import toast from 'react-hot-toast';
// import { useFormStatus } from 'react-dom';
// import { useRef } from 'react';
// const Contact = () => {
//   const t = useTranslations('contact');
//   const formRef = useRef(null);
//   const { pending } = useFormStatus();

//   const offices = ['la', 'nyc'];

//   const handleSubmit = async (formData) => {
//     const { data, error } = await sendEmail(formData);

//     if (error) {
//       toast.error(error);
//       return;
//     }

//     toast.success('Email sent successfully!');
//     formRef.current?.reset(); // Clear the form after successful submission
//   };

//   return (
//     <section id='contact' className='section'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:flex-row gap-y-16'>
//           {/* text */}
//           <motion.div
//             variants={fadeIn('right')}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.4 }}
//             className='flex-1'
//           >
//             {/* title */}
//             <h2 className='h2 max-w-[490px]'>{t('title')}</h2>
//             {/* info items */}
//             <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
//               {offices.map((office) => (
//                 <div key={office}>
//                   {/* title */}
//                   <div className='font-oswald uppercase font-medium text-xl mb-3'>
//                     {t(`offices.${office}.title`)}
//                   </div>
//                   {/* subtitle */}
//                   <div className='font-thin mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
//                     {t(`offices.${office}.subtitle`)}
//                   </div>
//                   {/* address, phone & email */}
//                   <div className='flex flex-col gap-y-3 mb-8'>
//                     {/* address */}
//                     <div className='font-medium flex items-center gap-[10px]'>
//                       <FaMapMarkerAlt />
//                       <div>{t(`offices.${office}.address`)}</div>
//                     </div>
//                     {/* phone */}
//                     <div className='flex items-center gap-[10px]'>
//                       <FaPhoneAlt />
//                       <div>{t(`offices.${office}.phone`)}</div>
//                     </div>
//                     {/* email */}
//                     <div className='flex items-center gap-[10px]'>
//                       <FaEnvelope />
//                       <div>{t(`offices.${office}.email`)}</div>
//                     </div>
//                   </div>
//                   {/* link */}
//                   <Link
//                     className='font-thin border-b border-dark pb-[5px]'
//                     href='#'
//                   >
//                     {t(`offices.${office}.link`)}
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* contact form */}
//           <motion.div
//             variants={fadeIn('left')}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.4 }}
//             className='flex-1 xl:pl-[40px] flex justify-center items-center'
//           >
//             <form
//               ref={formRef}
//               className='flex flex-col gap-y-10 w-full font-thin'
//               action={handleSubmit}
//             >
//               <input
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
//                 name='senderName'
//                 placeholder={t('form.name')}
//                 type='text'
//               />
//               <input
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
//                 name='senderEmail'
//                 placeholder={t('form.email')}
//                 type='email'
//                 required
//               />
//               <textarea
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
//                 name='message'
//                 placeholder={t('form.message')}
//                 required
//                 maxLength={5000}
//               />
//               {/* button */}
//               <button
//                 type='submit'
//                 disabled={pending}
//                 className='btn btn-sm btn-dark self-start group flex items-center gap-2 disabled:opacity-65'
//               >
//                 {pending ? (
//                   <div className='h-4 w-4 animate-spin rounded-full border-b-2 border-white'></div>
//                 ) : (
//                   <>
//                     {t(`form.btnText`)}
//                     <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
//                   </>
//                 )}
//               </button>{' '}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
