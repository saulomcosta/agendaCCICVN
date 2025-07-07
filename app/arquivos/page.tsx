'use client';

import React from 'react';
import { FaDownload } from 'react-icons/fa';

type Arquivo = {
  nome: string;
  url: string;
};

// Lista de arquivos
const arquivos: Arquivo[] = [
  // Exemplo (adicione seus arquivos aqui):
  // { nome: 'Estatuto 2025', url: '/arquivos/estatuto.pdf' },
];

export default function ArquivosPage ()
{
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">📁 Arquivos para Download</h2>

      {arquivos.length === 0 ? (
        <p className="text-sm text-gray-600 text-center">
          ❌ Nenhum arquivo disponível para exibição no momento.
        </p>
      ) : (
        <ul className="space-y-3">
          {arquivos.map( ( arquivo, index ) => (
            <li
              key={index}
              className="flex items-center justify-between border border-gray-200 rounded px-4 py-2 bg-white shadow-sm hover:shadow transition"
            >
              <span className="text-sm text-gray-800">{arquivo.nome}</span>
              <a
                href={arquivo.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
              >
                <FaDownload className="text-base" />
                Baixar
              </a>
            </li>
          ) )}
        </ul>
      )}
    </div>
  );
}
