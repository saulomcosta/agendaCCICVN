'use client';

type Noticia = {
  texto: string;
  usuario: string;
  link: string;
};


const noticias: Noticia[] = [
  {
    texto: 'Siga nosso Instagram:',
    usuario: '@ssvp.ccicvn',
    link: 'https://www.instagram.com/ssvp.ccicvn/',
  },
];

export default function Noticias ()
{
  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-4 text-center">📣 Principais Notícias CCICVN</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {noticias.map( ( item, index ) => (
          <div
            key={index}
            className={`${ noticias.length === 1 ? 'w-full' : 'w-full sm:w-[48%] lg:w-[30%]'
              } border border-gray-300 rounded-md p-4 bg-white shadow-sm text-[10px] text-gray-800`}
          >
            <p>{item.texto}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              {item.usuario}
            </a>
          </div>
        ) )}
      </div>
    </div>
  );
}
