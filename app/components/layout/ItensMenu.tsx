import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactMail';

type ItemsMenuProps = {
    props?: boolean;
};

export const menuItems = [
    {
        name: 'Home',
        path: '/',
        icon: <HomeIcon />,
    },
    {
        name: 'Sobre',
        path: '/sobre',
        icon: <InfoIcon />,
    },
    {
        name: 'Contato',
        path: '/contato',
        icon: <ContactIcon />,
    },
];

const ItensMenu = ( { props }: ItemsMenuProps ) =>
{
    return (
        <>
            <List>
                {[ 'Home', 'Starred', 'Send email', 'Drafts' ].map( ( text, index ) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: props ? 'initial' : 'center',
                                px: 2.5
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: props ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ) )}
            </List>
            <Divider />
            <List>
                {[ 'All mail', 'Trash', 'Spam' ].map( ( text, index ) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: props ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: props ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{ opacity: props ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ) )}
            </List>
        </>
    );
};

export default ItensMenu;