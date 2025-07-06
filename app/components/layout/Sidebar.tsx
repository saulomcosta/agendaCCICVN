'use client';

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import SearchHeader from './Search';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ElementosHeader from './Elementos';
import ItensMenu from './ItensMenu';
import LogoDrawer from './LogoDrawer';

const drawerWidth = 240;

const openedMixin = ( theme: Theme ): CSSObject => ( {
    width: drawerWidth,
    transition: theme.transitions.create( 'width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    } ),
    overflowX: 'hidden',
} );

const closedMixin = ( theme: Theme ): CSSObject => ( {
    transition: theme.transitions.create( 'width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    } ),
    overflowX: 'hidden',
    width: `calc(${ theme.spacing( 7 ) } + 1px)`,
    [ theme.breakpoints.up( 'sm' ) ]: {
        width: `calc(${ theme.spacing( 8 ) } + 1px)`,
    },
} );

const DrawerHeader = styled( 'div' )( ( { theme } ) => ( {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing( 0, 1 ),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
} ) );

interface AppBarProps extends MuiAppBarProps
{
    open?: boolean;
}

const AppBar = styled( MuiAppBar, {
    shouldForwardProp: ( prop ) => prop !== 'open',
} )<AppBarProps>( ( { theme, open } ) => ( {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create( [ 'width', 'margin' ], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    } ),
    ...( open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${ drawerWidth }px)`,
        transition: theme.transitions.create( [ 'width', 'margin' ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        } ),
    } ),
} ) );

const Drawer = styled( MuiDrawer, { shouldForwardProp: ( prop ) => prop !== 'open' } )(
    ( { theme, open } ) => ( {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...( open && {
            ...openedMixin( theme ),
            '& .MuiDrawer-paper': openedMixin( theme ),
        } ),
        ...( !open && {
            ...closedMixin( theme ),
            '& .MuiDrawer-paper': closedMixin( theme ),
        } ),
    } ),
);

const Sidebar = () =>
{
    const theme = useTheme();
    const [ open, setOpen ] = React.useState( false );
    const [ searchVisible, setSearchVisible ] = React.useState( false );
    const [ isMobile, setIsMobile ] = React.useState( window.innerWidth <= 600 );

    const toggleSearch = () =>
    {
        setSearchVisible( !searchVisible );
    };

    const handleDrawerOpen = () =>
    {
        if ( !isMobile )
        {
            setOpen( true );
        }
    };

    const handleDrawerClose = () =>
    {
        setOpen( false );
    };

    React.useEffect( () =>
    {
        const handleResize = () =>
        {
            setIsMobile( window.innerWidth <= 600 );
            handleDrawerClose();
            setSearchVisible( false );
        };

        window.addEventListener( 'resize', handleResize );
        return () =>
        {
            window.removeEventListener( 'resize', handleResize );
        };
    }, [] );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="absolute" open={open}>
                <Toolbar className='h-20'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...( open && { display: 'none' } ),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container spacing={2}>
                        <Grid item xs={isMobile ? 12 : 9}>
                            {isMobile ? (
                                <Grid container alignItems="center" spacing={1}>
                                    <Grid item xs>
                                        {searchVisible ? (
                                            <SearchHeader />
                                        ) : (
                                            <Grid container spacing={2}>
                                                <Grid item sm={1}>
                                                    <IconButton color="inherit" onClick={toggleSearch}>
                                                        <SearchIcon />
                                                    </IconButton>
                                                </Grid>
                                                <ElementosHeader />
                                            </Grid>
                                        )}
                                    </Grid>
                                    {searchVisible && (
                                        <Grid item>
                                            <IconButton color="inherit" onClick={toggleSearch}>
                                                <CloseIcon />
                                            </IconButton>
                                        </Grid>
                                    )}
                                </Grid>
                            ) : (
                                <SearchHeader />
                            )}
                        </Grid>
                        {isMobile || searchVisible ? null : (
                            <ElementosHeader />
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open}>
                <DrawerHeader className={isMobile ? 'mt-2' : ''} style={{ backgroundColor: '#1976d2' }}>
                    <LogoDrawer onClose={handleDrawerClose} theme={theme} />
                </DrawerHeader>
                <Divider />
                <ItensMenu props={open} />
            </Drawer>
        </Box>
    );
};

export default Sidebar;