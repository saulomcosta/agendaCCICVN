'use client';

import Link from 'next/link';

export default function Agenda ()
{
  return (
    <div className="text-center space-y-4 px-4 sm:px-10 lg:px-40 mt-5">
      <p className="text-sm text-gray-800 leading-relaxed">
        É muito importante que os(as) presidentes compartilhem com a comunidade vicentina todos os eventos, missas (incluindo ação de graças, 5 intençõese entre outros), atividades e ações que promovam o fortalecimento do nosso Carisma Vicentino.
        Especialmente as atividades das Obras Unidas devem ser divulgadas, para que a comunidade possa participar ativamente e de perto desse serviço maravilhoso.
        Compartilhar não apenas os eventos, mas também a agenda com os(as) confrades e consócias das Conferências é essencial para que acompanhem a vida e o trabalho do Conselho Central com maior envolvimento.
      </p>

      <Link
        href="https://calendar.google.com/calendar/embed?src=c_bdca95cd4d66df928500c417e0d43b1f4989edfa72dc4a408db21e81ac825313%40group.calendar.google.com&ctz=America%2FSao_Paulo"
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        📅 Ver Agenda CCICVN
      </Link>
    </div>
  );
}
