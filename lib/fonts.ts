import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});
