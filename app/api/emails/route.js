
// import { Resend } from 'resend';
// import { validateString, getErrorMessage } from '../../utils/utils';
// // import { validateString, getErrorMessage } from '../../utils/utils';
// import ContactFormEmail from '../../emails/ContactFormEmail';
// // import ContactFormEmail from '../../components/ContactFormEmail';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request) {
//   try {
//     const formData = await request.formData();
//     const senderName = formData.get('senderName');
//     const senderEmail = formData.get('senderEmail');
//     const message = formData.get('message');

//     // Simple server-side validation
//     if (!validateString(senderEmail, 500)) {
//       return Response.json({ error: 'Invalid sender email' }, { status: 400 });
//     }
//     if (!validateString(message, 5000)) {
//       return Response.json({ error: 'Invalid message' }, { status: 400 });
//     }

//     const { data, error } = await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: ['nikolay.tetradov@gmail.com'],
//       subject: 'Message from contact form',
//       reply_to: senderEmail,
//       react: (
//         <ContactFormEmail
//           senderName={senderName}
//           senderEmail={senderEmail}
//           message={message}
//         />
//       ),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error: getErrorMessage(error) }, { status: 500 });
//   }
// }
