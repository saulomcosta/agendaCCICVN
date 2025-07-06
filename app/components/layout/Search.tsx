import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled( 'div' )( ( { theme } ) => ( {
    position: 'relative',
    borderRadius: '40px',
    backgroundColor: '#f1f1f1',
    '&:hover': {
        backgroundColor: '#f8f8f8',
    },
    marginRight: theme.spacing( 2 ),
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
        marginLeft: theme.spacing( 3 ),
        width: 'auto',
    },
} ) );

const SearchIconWrapper = styled( 'div' )( ( { theme } ) => ( {
    padding: theme.spacing( 0, 2 ),
    color: 'black',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
} ) );

const StyledInputBase = styled( InputBase )( ( { theme } ) => ( {
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing( 1, 1, 1, 0 ),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${ theme.spacing( 4 ) })`,
        transition: theme.transitions.create( 'width' ),
        width: '100%',
        [ theme.breakpoints.up( 'md' ) ]: {
            width: '20ch',
        },
        borderRadius: '50px'
    },
} ) );

const StyledSearch = styled( Search )( {
    backgroundColor: '#e5e7eb;',
    color: 'black',
} );

const SearchHeader = () =>
{
    return (
        <Typography variant="h6" noWrap component="div">
            <StyledSearch>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Pesquisar…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </StyledSearch>
        </Typography>
    );
};

export default SearchHeader;