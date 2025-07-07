// app/api/contato/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST ( req: Request )
{
  const { de, mensagem } = await req.json();

  const transporter = nodemailer.createTransport( {
    service: 'Gmail', // ou outro provedor SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  } );

  try
  {
    await transporter.sendMail( {
      from: `"Website CCICVN" <${ process.env.EMAIL_USER }>`,
      to: 'decom_ccvendanova@ssvpcmbh.org.br',
      subject: 'Mensagem via site CCICVN',
      text: `De: ${ de }\n\n${ mensagem }`,
    } );

    return NextResponse.json( { success: true } );
  } catch ( error )
  {
    console.error( error );
    return NextResponse.json( { success: false }, { status: 500 } );
  }
}
