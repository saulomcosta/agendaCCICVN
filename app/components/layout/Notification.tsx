import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';

const NotificationHeader = () =>
{
    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>( null );

    const handleClick = ( event: React.MouseEvent<HTMLElement> ) =>
    {
        setAnchorEl( event.currentTarget );
    };

    const handleClose = () =>
    {
        setAnchorEl( null );
    };

    return (
        <Typography variant="h6" noWrap component="div">
            <div>
                <IconButton
                    color="inherit"
                    onClick={handleClick}
                    aria-controls="notification-menu"
                    aria-haspopup="true"
                >
                    <Tooltip title="Notificação">
                        <Badge badgeContent={5} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </Tooltip>
                </IconButton>
                <Menu
                    id="notification-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean( anchorEl )}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Notificação 1</MenuItem>
                    <MenuItem onClick={handleClose}>Notificação 2</MenuItem>
                    <MenuItem onClick={handleClose}>Notificação 3</MenuItem>
                </Menu>
            </div>
        </Typography>
    );
};

export default NotificationHeader;