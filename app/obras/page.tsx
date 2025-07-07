'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ObrasUnidas ()
{
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="80vh"
      gap={3}
      mb={3}
      mt={3}
    >
      {/* Banners empilhados verticalmente com espaço de 3px */}
      <Box display="flex" flexDirection="column" gap="10px" mt={2}>
        <Image
          src="/abrigo.png"
          alt="Banner Abrigo"
          width={500}
          height={150}
          style={{ objectFit: 'contain' }}
        />
        <Image
          src="/lar.png"
          alt="Banner Lar"
          width={500}
          height={150}
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
}
