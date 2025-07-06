'use client';

import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Button from '@mui/material/Button';

const CalendarButton = () =>
{
  const handleClick = () =>
  {
    const calendarLink =
      'https://calendar.google.com/calendar/embed?src=c_bdca95cd4d66df928500c417e0d43b1f4989edfa72dc4a408db21e81ac825313%40group.calendar.google.com&ctz=America%2FSao_Paulo';
    window.open( calendarLink, '_blank' );
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      startIcon={<CalendarMonthIcon />}
      sx={{ mt: 2 }}
    >
      Ver Agenda
    </Button>
  );
};

export default CalendarButton;