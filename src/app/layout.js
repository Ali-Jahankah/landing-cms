import { Signika_Negative, Rubik } from 'next/font/google';
import Footer from './components/main/Footer';
import Header from './components/main/Header';
import './styles/globals.css';

const signikaNegative = Signika_Negative({
  variable: '--font-signika-negative',
  subsets: ['latin'],
  display: 'swap'
});
const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap'
});
export const metadata = {
  generator: 'Next.js',
  applicationName: 'Technical Task',
  title: 'High-Performance Next.js App | Optimized & SEO-Friendly',
  description: 'A fast, SEO-optimized Next.js app as a technical task.',
  keywords: ['Next.js', 'React', 'JavaScript', 'Contentful', 'Encord', 'AI'],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  authors: [{ name: 'Ali Jahankhah', url: 'https://uaral.me' }]
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${signikaNegative.variable} ${rubik.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
