import './globals.css';
import type { Metadata } from 'next';
import { inter, playfair } from '@/lib/fonts';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'La Dolce Vita - Restaurant Italien à Paris',
  description: 'Restaurant italien authentique situé au cœur de Paris. Cuisine italienne traditionnelle, produits importés, ambiance chaleureuse.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={playfair.variable}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
