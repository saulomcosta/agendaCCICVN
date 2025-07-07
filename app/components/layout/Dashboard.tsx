// components/Dashboard.tsx
'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CakeIcon from '@mui/icons-material/Cake';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Aniversariantes from '@/app/aniversariantes/page';
import Noticias from '@/app/noticias/page';
import Agenda from '@/app/agenda/page';
import HomePage from '@/app/page';

export default function Dashboard ()
{
  const [ tab, setTab ] = useState( 0 );
  const pages = [
    <HomePage key="home" />,
    <Aniversariantes key="aniversariantes" />,
    <Noticias key="noticias" />,
    <Agenda key="agenda" />,
  ];


  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={tab}
        onChange={( _, v ) => setTab( v )}
        centered
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab icon={<DashboardIcon />} label="Início" />
        <Tab icon={<CakeIcon />} label="Aniversariantes" />
        <Tab icon={<NotificationsIcon />} label="Notícias" />
        <Tab icon={<CalendarMonthIcon />} label="Agenda" />
      </Tabs>

      <Box sx={{ p: 3 }}>{pages[ tab ]}</Box>
    </Box>
  );
}
