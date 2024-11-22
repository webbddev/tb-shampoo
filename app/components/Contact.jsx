'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { sendEmail } from '../../actions/sendEmail';
import toast from "react-hot-toast";

const Contact = () => {
  const t = useTranslations('contact');

  // Define office data structure
  const offices = ['la', 'nyc'];

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
                  <div className='font-thin mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
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
                  {/* link */}
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
            className='flex-1 xl:pl-[40px] flex justify-center items-center'
          >
            <form
              className='flex flex-col gap-y-10 w-full font-thin'
              action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
            >
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='senderName'
                placeholder={t('form.name')}
                type='text'
              />
              <input
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='senderEmail'
                placeholder={t('form.email')}
                type='email'
                required
              />
              <textarea
                className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
                name='message'
                placeholder={t('form.message')}
                required
                maxLength={5000}
              />
              {/* button */}
              <button
                onClick={async () => {
                  try {
                    await fetch('/api/emails', {
                      method: 'POST',
                    });
                    console.log('Email sent successfully');
                  } catch (error) {
                    console.error('Error sending email:', error);
                  }
                }}
                className='btn btn-sm btn-dark self-start'
              >
                {t('form.btnText')}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// 'use client';

// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   const t = useTranslations('contact');

//   // Define office data structure
//   const offices = ['la', 'nyc'];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     try {
//       const response = await fetch('/api/emails', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to send email');
//       }

//       const result = await response.json();
//       console.log('Email sent successfully:', result);
//       alert(t('form.successMessage')); // Notify user of success
//       e.target.reset(); // Reset the form after submission
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert(t('form.errorMessage')); // Notify user of failure
//     }
//   };

//   return (
//     <section id='contact' className='section'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:flex-row gap-y-16'>
//           {/* Text */}
//           <motion.div
//             variants={fadeIn('right')}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.4 }}
//             className='flex-1'
//           >
//             <h2 className='h2 max-w-[490px]'>{t('title')}</h2>
//             <div className='flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0'>
//               {offices.map((office) => (
//                 <div key={office}>
//                   <div className='font-oswald uppercase font-medium text-xl mb-3'>
//                     {t(`offices.${office}.title`)}
//                   </div>
//                   <div className='font-thin mb-6 text-[#333] leading-[187%] tracking-[0.02em]'>
//                     {t(`offices.${office}.subtitle`)}
//                   </div>
//                   <div className='flex flex-col gap-y-3 mb-8'>
//                     <div className='font-medium flex items-center gap-[10px]'>
//                       <FaMapMarkerAlt />
//                       <div>{t(`offices.${office}.address`)}</div>
//                     </div>
//                     <div className='flex items-center gap-[10px]'>
//                       <FaPhoneAlt />
//                       <div>{t(`offices.${office}.phone`)}</div>
//                     </div>
//                     <div className='flex items-center gap-[10px]'>
//                       <FaEnvelope />
//                       <div>{t(`offices.${office}.email`)}</div>
//                     </div>
//                   </div>
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

//           {/* Contact Form */}
//           <motion.div
//             variants={fadeIn('left')}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{ once: false, amount: 0.4 }}
//             className='flex-1 xl:pl-[40px] flex justify-center items-center'
//           >
//             <form
//               className='flex flex-col gap-y-10 w-full font-thin'
//               onSubmit={handleSubmit}
//             >
//               <input
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
//                 name='senderName'
//                 placeholder={t('form.name')}
//                 type='text'
//                 required
//               />
//               <input
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4'
//                 name='senderEmail'
//                 placeholder={t('form.email')}
//                 type='email'
//                 required
//               />
//               <textarea
//                 className='border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4 resize-none'
//                 name='message'
//                 placeholder={t('form.message')}
//                 required
//                 maxLength={5000}
//               />
//               <button type='submit' className='btn btn-sm btn-dark self-start'>
//                 {t('form.btnText')}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;