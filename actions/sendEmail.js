'use server';

import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '../app/utils/utils';
import ContactFormEmail from '../app/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderName = formData.get('senderName');
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // Simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'nikolay.tetradov@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      // react: React.createElement(ContactFormEmail, {
      //   senderName: senderName,
      //   message: message,
      //   senderEmail: senderEmail,
      // }),
      react: (
        <ContactFormEmail
          message={message}
          senderName={senderName}
          senderEmail={senderEmail}
        />
      ),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
