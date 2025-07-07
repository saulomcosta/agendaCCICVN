'use client';

type Noticia = {
  descricao: string;
  data?: string;
  hora?: string;
  textoLink?: string;
  link?: string;
};

const noticias: Noticia[] = [
  {
    descricao: 'Siga nosso Instagram:',
    textoLink: '@ssvp.ccicvn',
    link: 'https://www.instagram.com/ssvp.ccicvn/',
  },
  {
    descricao: '55ª Romaria dos Vicentinos ao Santuário Nossa Senhora da Piedade',
    data: '27/07/2025',
    hora: '09h00',
    textoLink: 'Faça já sua inscrição',
    link: 'https://santuarionossasenhoradapiedade.arquidiocesebh.org.br/santuario/visitas/',
  },
];

export default function Noticias ()
{
  return (
    <div>
      <h2 className="text-lg font-semibold mt-3 mb-4 text-center">
        📣 Principais Notícias CCICVN
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {noticias.map( ( item, index ) => (
          <div
            key={index}
            className={`${ noticias.length === 1 ? 'w-full' : 'w-full sm:w-[48%] lg:w-[30%]'
              } border border-gray-300 rounded-md p-4 bg-white shadow-sm text-[14px] text-gray-800`}
          >
            <p className="font-semibold mb-1">{item.descricao}</p>

            {( item.data || item.hora ) && (
              <p>
                {item.data && (
                  <>
                    <span className="font-semibold">Data:</span> {item.data}
                  </>
                )}
                {item.data && item.hora && <span className="mx-2.5" />} {/* espaço de 10px */}
                {item.hora && (
                  <>
                    <span className="font-semibold">Hora:</span> {item.hora}
                  </>
                )}
              </p>
            )}

            {item.link && item.textoLink && (
              <p className="mt-1">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-words"
                >
                  {item.textoLink}
                </a>
              </p>
            )}
          </div>
        ) )}
      </div>
    </div>
  );
}
