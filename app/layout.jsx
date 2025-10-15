import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Agraharam Cafe - Pure Vegetarian Culinary Journey',
  description: 'Welcome to Agraharam Cafe, your go-to destination for pure vegetarian delights! From crispy dosas and fluffy idlis to rich paneer curries and buttery naans.',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
