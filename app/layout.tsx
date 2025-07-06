import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Layout from './components/layout/Layout';

const inter = Inter( { subsets: [ 'latin' ] } );

export const metadata: Metadata = {
  title: 'Agenda Anual CCICVN',
  description: 'Acompanhe os eventos do Conselho Central',
};

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode;
} )
{
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/LogoSSVP.png" />
        <meta name="theme-color" content="#1976d2" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}