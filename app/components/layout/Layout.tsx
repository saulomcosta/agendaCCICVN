'use client';

import React from 'react';
import
{
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/aniversariantes', label: 'Aniversariantes' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/contato', label: 'Contato' }, // novo item
];

export default function Layout ( { children }: { children: React.ReactNode; } )
{
  const [ mobileOpen, setMobileOpen ] = React.useState( false );
  const theme = useTheme();
  const isMobile = useMediaQuery( theme.breakpoints.down( 'md' ) );

  const handleDrawerToggle = () =>
  {
    setMobileOpen( !mobileOpen );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      {navLinks.map( ( { href, label } ) => (
        <Box key={href} sx={{ my: 1 }}>
          <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
            {label}
          </Link>
        </Box>
      ) )}
    </Box>
  );

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src="/LogotipoSSVP.png" alt="Logo SSVP" width={40} height={40} />
              <Typography variant="h6" component="div">
                CCICVN
              </Typography>
            </Box>

            {isMobile ? (
              <>
                <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{ keepMounted: true }}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
                {navLinks.map( ( { href, label } ) => (
                  <Link key={href} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {label}
                  </Link>
                ) )}
              </Stack>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Box component="main" flex="1 0 auto">
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}
