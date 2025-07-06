'use client';

import React from 'react';
import Image from 'next/image';

export default function Home ()
{
  return (
    <main className="flex flex-col items-center justify-start p-4">
      {/* Banner no topo com tamanho fixo */}
      <div className="mb-6">
        <Image
          src="/banner-cc-obras.png"
          alt="Banner CC e Obras"
          width={400}
          height={100}
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Texto clicável que abre o calendário */}
      <a
        href="https://calendar.google.com/calendar/embed?src=c_bdca95cd4d66df928500c417e0d43b1f4989edfa72dc4a408db21e81ac825313%40group.calendar.google.com&ctz=America%2FSao_Paulo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-bold text-blue-600 hover:underline text-center"
      >
        📅 Agenda Vicentina
      </a>
    </main>
  );
}