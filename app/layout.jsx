import { Bebas_Neue, Sora } from 'next/font/google';
import SmoothScrollProvider from '../components/shared/SmoothScrollProvider';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sora = Sora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Shehroz Majeed — Cybersecurity & AI Engineering',
  description:
    'Offensive security researcher and applied ML engineer. Autonomous red-team systems, zero-trust architectures, and intelligent defense pipelines.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${sora.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
