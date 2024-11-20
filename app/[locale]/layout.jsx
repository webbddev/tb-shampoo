import { Oswald, Rozha_One } from 'next/font/google';
import './globals.css';
// next-intl internationalization
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound, redirect } from 'next/navigation';
import { routing } from '../../i18n/routing';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

const rozha = Rozha_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rozha',
});

export const metadata = {
  title: '🧴 Tatiana Braga Shampoo 💆🏼‍♀️',
  description: 'shampoo, chisinau, moldova',
  keywords: 'shampoo, chisinau, moldova',
  author: 'Tatiana Braga',
  creator: 'Nicholas Tetradov',
  applicationName: 'Next.js',
  date: '2024-11-01',
  language: 'en-US',
};

export default async function RootLayout({ children, params: { locale } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    redirect('/en');
  }

  // Fetch the appropriate messages for the locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${oswald.variable} ${rozha.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
