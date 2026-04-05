import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}