'use client';

import React from 'react';
import Image from 'next/image';

export default function Home ()
{
  // Lista fixa de aniversariantes
  const aniversariantes = [
    ''
  ];

  // Lista fixa de notícias
  const noticias = [
    {
      texto: 'Siga nosso Instagram:',
      usuario: '@ssvp.ccicvn',
      link: 'https://www.instagram.com/ssvp.ccicvn/',
    },
  ];


  return (
    <main className="flex flex-col items-center justify-start p-4 w-full max-w-screen-lg mx-auto overflow-hidden">
      {/* Banner */}
      <div className="mb-8">
        <Image
          src="/banner-cc-obras.png"
          alt="Banner CC e Obras"
          width={400}
          height={100}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Link para agenda */}
      <button
        onClick={() =>
          window.open(
            'https://calendar.google.com/calendar/embed?src=c_bdca95cd4d66df928500c417e0d43b1f4989edfa72dc4a408db21e81ac825313%40group.calendar.google.com&ctz=America%2FSao_Paulo',
            '_blank'
          )
        }
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 mb-6"
      >
        📅 Ver Agenda CCICVN
      </button>

      {/* Colunas: Aniversariantes e Notícias */}
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center">
        {/* Aniversariantes */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">🎉 Aniversariantes do Mês</h2>
          <ul className="text-sm text-gray-800 list-disc pl-5">
            {aniversariantes.map( ( item, index ) => (
              <li key={index} className="mb-1">{item}</li>
            ) )}
          </ul>
        </div>

        {/* Notícias */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-2">📣 Principais Notícias CCICVN</h2>
          <ul className="text-sm text-gray-800 list-disc pl-5">
            {noticias.map( ( item, index ) => (
              <li key={index} className="mb-1">
                {item.texto}{' '}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.usuario}
                </a>
              </li>
            ) )}
          </ul>
        </div>
      </div>
    </main>
  );
}