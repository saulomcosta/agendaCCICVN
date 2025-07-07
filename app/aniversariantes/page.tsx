'use client';

type Aniversariante = {
  dia: string;
  nome: string;
  cp: string;
  desc?: string;
};

const aniversariantes: Aniversariante[] = [
  {
    dia: '06',
    nome: 'Conferência Jesus Bom Pastor',
    cp: 'CPSFJ',
  },
  {
    dia: '08',
    nome: 'Conferência Nossa Senhora de Fátima',
    cp: 'CPNSF',
  },
  {
    dia: '13',
    nome: 'Conferência Nossa Senhora Rainha dos Profetas',
    cp: 'CPSJE',
  },
  {
    dia: '16',
    nome: 'Conferência Santa Edwiges',
    cp: 'CPNSA',
  },
  {
    dia: '17',
    nome: 'Conferência Mártir São João Batista',
    cp: 'CPNSA',
  },
  {
    dia: '22',
    nome: 'Conferência São Miguel Arcanjo',
    cp: 'CPNSA',
    desc: 'Rezemos para que volte ao seu funcionamento'
  }
];

export default function Aniversariantes ()
{
  const hoje = new Date();
  const diaAtual = String( hoje.getDate() ).padStart( 2, '0' ); // ex: '07'
  return (
    <div className="ml-[20px]">
      <h2 className="text-[14px] font-semibold mt-3 mb-4 text-center">🎉 Aniversariantes do Mês</h2>

      {aniversariantes.length === 0 ? (
        <p className="text-[12px] text-gray-600 text-center">
          Nenhum aniversariante registrado para este mês.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {aniversariantes.map( ( item, index ) =>
          {
            const isHoje = item.dia === diaAtual;

            return (
              <div
                key={index}
                className={`w-full sm:w-[48%] lg:w-[30%] border border-gray-300 rounded-md p-4 bg-white shadow-sm ${ isHoje ? 'bg-yellow-100 border-yellow-400' : ''
                  }`}
              >
                <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-[10px] text-gray-800">
                  <span className="font-semibold">Dia:</span>
                  <span>{item.dia}</span>

                  <span className="font-semibold">Nome:</span>
                  <span>{item.nome}</span>

                  <span className="font-semibold">CP:</span>
                  <span>{item.cp}</span>

                  {item.desc && (
                    <>
                      <span className="font-semibold">**</span>
                      <span>{item.desc}</span>
                    </>
                  )}

                </div>
              </div>
            );
          } )}
        </div>
      )}
    </div>
  );
}
