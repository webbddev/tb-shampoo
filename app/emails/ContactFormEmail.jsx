import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Img,
  Preview,
  Section,
  Text,
  Tailwind
} from '@react-email/components';
import * as React from "react";

export default function ContactFormEmail({
  senderName,
  message,
  senderEmail,
}) {
  return (
    <Html>
      <Head />
      <Preview>Новое сообщение от вашего сайта TatianaBraga.md</Preview>
      <Tailwind>
        <Body className='bg-gray-50 my-12 mx-auto font-sans'>
          <Container className='max-w-2xl mx-auto'>
            <Img
              className='w-32 h-32 mb-2 mx-auto rounded-sm object-fit border-4 border-yellow-100'
              src='https://tatiana-braga-shampoo.vercel.app/_next/static/media/logo.109aad78.svg'
              alt='Tatiana Braga'
            />
            <Container className='p-8 rounded-2xl shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200'>
              <Heading className='leading-tight font-oswald text-3xl text-gray-800 text-center mb-6'>
                Привет Танюша! 🖐🏻
              </Heading>
              <Hr className='border-yellow-200 my-6' />
              <Text className='text-lg font-medium text-gray-700 mb-4'>
                Вы получили новое сообщение от{' '}
                <span className='text-yellow-700 font-semibold'>
                  {senderName}
                </span>{' '}
                отправленное с вашего сайта <span className='text-purple-500'>tatianabraga.md</span>
              </Text>
              <Container className='bg-white p-6 rounded-xl mb-6'>
                <Text className='text-lg italic text-gray-700'>
                  "{message}"
                </Text>
              </Container>
              <Text className='text-sm text-gray-600'>
                Email отправителя:{' '}
                <span className='font-medium text-yellow-700'>
                  {senderEmail}
                </span>
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
