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
      gap={3}
      mb={3} // margem inferior de 3 unidades do MUI (~24px)
      mt={3}
    >
      <Image
        src="/banner-cc-obras.png"
        alt="Banner CC e Obras"
        width={500}
        height={200}
        style={{ objectFit: 'contain' }}
        priority
      />

      <Box maxWidth={600} textAlign="center">
        <Typography variant="body1" color="text.secondary">
          O <strong>Conselho Central Imaculada Conceição de Venda Nova</strong> da SSVP coordena e
          apoia os Conselhos Particulares da sua área de atuação, promovendo a unidade, formação e
          suporte às Conferências Vicentinas. Essas, por sua vez, são responsáveis pelo contato
          direto com as famílias assistidas, levando solidariedade, escuta fraterna e auxílio
          material e espiritual, conforme os princípios vicentinos.
        </Typography>
      </Box>
    </Box>
  );
}