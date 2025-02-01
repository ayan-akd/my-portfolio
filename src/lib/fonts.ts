import { Fira_Sans, Fira_Code } from 'next/font/google';

export const firaSans = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
  weight: ['300', '400', '500', '600', '700']
});
