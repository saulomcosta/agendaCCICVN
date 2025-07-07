'use client';

import React, { useState } from 'react';

export default function ContatoEmail ()
{
  const [ de, setDe ] = useState( '' );
  const [ mensagem, setMensagem ] = useState( '' );
  const [ enviado, setEnviado ] = useState( false );
  const [ erro, setErro ] = useState( false );
  const [ loading, setLoading ] = useState( false );

  const maxCaracteres = 300;

  const handleEnviar = async () =>
  {
    setLoading( true );
    setErro( false );
    setEnviado( false );

    try
    {
      const res = await fetch( '/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { de, mensagem } ),
      } );

      if ( res.ok )
      {
        setEnviado( true );
        setDe( '' );
        setMensagem( '' );
      } else
      {
        setErro( true );
      }
    } catch
    {
      setErro( true );
    } finally
    {
      setLoading( false );
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="max-w-md w-full mt-4 p-4 border border-gray-300 rounded-md shadow-md bg-white">
        <h2 className="text-lg font-semibold mb-4 text-center">📬 Enviar mensagem para o DECOM</h2>

        <label className="block text-sm font-medium mb-1">De:</label>
        <input
          type="text"
          value={de}
          onChange={( e ) => setDe( e.target.value )}
          placeholder="Seu nome ou e-mail"
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4"
        />

        <label className="block text-sm font-medium mb-1">Mensagem (máx. 300 caracteres):</label>
        <textarea
          value={mensagem}
          onChange={( e ) =>
          {
            if ( e.target.value.length <= maxCaracteres ) setMensagem( e.target.value );
          }}
          placeholder="Escreva sua mensagem..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none mb-2"
          rows={5}
        />
        <p className="text-xs text-gray-500 text-right mb-4">{mensagem.length}/{maxCaracteres} caracteres</p>

        <button
          onClick={handleEnviar}
          disabled={!de || !mensagem || loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>

        {enviado && (
          <p className="mt-4 text-green-600 text-sm text-center">
            ✅ Mensagem enviada com sucesso!
          </p>
        )}

        {erro && (
          <p className="mt-4 text-red-600 text-sm text-center">
            ❌ Erro ao enviar. Tente novamente mais tarde.
          </p>
        )}
      </div>

      {/* Rodapé personalizado */}
      <p className="mt-1 text-center text-gray-600 text-sm max-w-md">
        Entre em contato conosco e <strong>nos envie seu evento!</strong>
      </p>
    </div>
  );
}
