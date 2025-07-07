'use client';

type Aniversariante = {
  dia: string;
  nome: string;
  cp: string;
  conf: string;
};

const aniversariantes: Aniversariante[] = [];

const aniversariantes2: Aniversariante[] = [
  {
    dia: '09',
    nome: 'João',
    cp: 'CPSG',
    conf: 'Conferência São João',
  },
  {
    dia: '12',
    nome: 'Maria',
    cp: 'CPVN',
    conf: 'Conferência Nossa Senhora das Graças',
  },
  {
    dia: '27',
    nome: 'Saulo',
    cp: 'CPVN',
    conf: 'Conferência São Pedro',
  },
  {
    dia: '30',
    nome: 'Ana',
    cp: 'CPVN',
    conf: 'Conferência São Lucas',
  },
];

export default function Aniversariantes ()
{
  return (
    <div className="ml-[20px]">
      <h2 className="text-[14px] font-semibold mt-3 mb-4 text-center">🎉 Aniversariantes do Mês</h2>

      {aniversariantes.length === 0 ? (
        <p className="text-[12px] text-gray-600 text-center">
          Nenhum aniversariante registrado para este mês.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {aniversariantes.map( ( item, index ) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[30%] border border-gray-300 rounded-md p-4 bg-white shadow-sm"
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-[10px] text-gray-800">
                <span className="font-semibold">Dia:</span>
                <span>{item.dia}</span>

                <span className="font-semibold">Nome:</span>
                <span>{item.nome}</span>

                <span className="font-semibold">CP:</span>
                <span>{item.cp}</span>

                <span className="font-semibold">Conf.:</span>
                <span>{item.conf}</span>
              </div>
            </div>
          ) )}
        </div>
      )}
    </div>
  );
}
