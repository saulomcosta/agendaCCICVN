'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomePage ()
{
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="80vh"
      gap={2}
      mb={0}
      mt={3}
    >
      {/* Banner principal */}
      <Image
        src="/banner-cc-obras.png"
        alt="Banner CC e Obras"
        width={500}
        height={200}
        style={{ objectFit: 'contain' }}
        priority
      />

      {/* Texto institucional */}
      <Box maxWidth={600}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: 14,
            textAlign: 'justify',
            mb: 0
          }}
        >
          O <strong>Conselho Central Imaculada Conceição de Venda Nova</strong> da SSVP coordena e
          apoia os Conselhos Particulares da sua área de atuação, promovendo a unidade, formação e
          suporte às Conferências Vicentinas. Essas, por sua vez, são responsáveis pelo contato
          direto com as famílias assistidas, levando solidariedade, escuta fraterna e auxílio
          material e espiritual, conforme os princípios vicentinos.
        </Typography>
      </Box>

      {/* Linha cinza suave */}
      <Box
        component="hr"
        sx={{
          border: 'none',
          borderTop: '1px solid #d1d5db', // cinza suave (Tailwind gray-300)
          width: '100%',
          mb: 0
        }}
      />

      {/* Diretoria do CCICVN - alinhado à esquerda */}
      <Box maxWidth={600} width="100%" alignSelf="flex-start" px={4}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: 14, textAlign: 'left', mb: 0 }}
        >
          <strong>Diretoria Interventora:</strong>
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: 12, textAlign: 'left', pl: '8px', fontStyle: 'italic' }}
        >
          <strong>Presidente:</strong> Cfd. Sérgio Luiz de Assis
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: 12, textAlign: 'left', pl: '8px', fontStyle: 'italic' }}
        >
          <strong>Secretário:</strong> Cfd. Nedson Alves de Barros
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: 12, textAlign: 'left', pl: '8px', fontStyle: 'italic' }}
        >
          <strong>Tesoureiro:</strong> Cfd. Fernando Assis de Oliveira
        </Typography>

      </Box>
    </Box>
  );
}
