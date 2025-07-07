'use client';

type Conselho = {
  nome: string;
  endereco: string;
  descricao?: string;
};

const conselhos: Conselho[] = [
  {
    nome: 'Conselho Particular Nossa Senhora Aparecida',
    endereco: 'R. Cap. Sérgio Píres, 97 - São Pedro Venda Nova, Belo Horizonte - MG, 31615-640',
    descricao: '**  '
  },
  {
    nome: 'Conselho Particular Nossa Senhora de Fátima',
    endereco: 'Rua ...',
    descricao: '**  '
  },
  {
    nome: 'Conselho Particular Sagrada Face de Jesus',
    endereco: 'Rua ...',
    descricao: '**  '
  },
  {
    nome: 'Conselho Particular Santa Amélia',
    endereco: 'Av. da Sinfonia, 317 - Conj. Helena Antipoff, Belo Horizonte - MG, 31560-420',
    descricao: '**  As reuniões ocorrem toda primeira quinta-feira após a reunião do Conselho Central, às 20h.'
  },
  {
    nome: 'Conselho Particular Santo Antônio',
    endereco: 'R. São Vicente, 55 - Venda Nova, Belo Horizonte - MG, 31510-080',
    descricao: 'Rezemos para seu retorno'
  },
  {
    nome: 'Conselho Particular São Geraldo',
    endereco: 'R. Mogi das Cruzes, 79 - Piratininga, Belo Horizonte - MG, 31573-120',
    descricao: '**  As reuniões do Conselho acontecem na sede do Conselho Particular São Geraldo, toda 4ª quinta-feira do mês, às 19h.'
  },
  {
    nome: 'Conselho Particular São João Evangelista',
    endereco: 'R. dos Maçaricos, 26 - Vila Cloris, Belo Horizonte - MG, 31744-134',
    descricao: '**  As reuniões ocorrem todo quarto domingo do mês, nas dependências da Comunidade Nossa Senhora do Perpétuo Socorro, às 08h.'
  },
];

export default function ConselhosParticulares ()
{
  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
      <h2 className="text-xl font-semibold text-center mb-6">📍 Conselhos Particulares</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {conselhos.map( ( cp, index ) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 bg-white shadow-sm text-[14px] text-gray-800"
          >
            <p className="font-semibold">{cp.nome}</p>
            <p className="text-gray-600 mt-1">{cp.endereco}</p>
            {cp.descricao && (
              <p className="text-gray-500 mt-2">{cp.descricao}</p>
            )}
          </div>
        ) )}
      </div>
    </div>
  );
}
