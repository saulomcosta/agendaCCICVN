import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type LogoDrawerProps = {
    onClose: () => void;
    theme: any;
};

const LogoDrawer = ( { onClose, theme }: LogoDrawerProps ) =>
{
    const handleClose = () =>
    {
        onClose();
    };
    return (
        <>
            <img src="/LogoSSVP.png" alt="Logo" style={{ width: '36%', height: '92%', marginRight: '25%' }} />
            <IconButton onClick={handleClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </>
    );
};

export default LogoDrawer;