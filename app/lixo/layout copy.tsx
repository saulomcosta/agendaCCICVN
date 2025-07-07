import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Layout from '../components/layout/Layout';

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
      <body className="flex flex-col min-h-screen bg-white">
        <Layout>{children}</Layout>

        {/* Rodapé fixado ao fim da tela, com altura mínima preenchida */}
        <footer className="bg-gray-100 text-gray-600 text-sm text-center  mt-auto">
          <p>©{new Date().getFullYear()} Conselho Central Imaculada Conceição de Venda Nova</p>
        </footer>
      </body>
    </html>
  );
}