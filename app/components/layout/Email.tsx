import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EmailIcon from '@mui/icons-material/Email';
import Tooltip from '@mui/material/Tooltip';

const EmailHeader = () =>
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
                    aria-controls="email-menu"
                    aria-haspopup="true"
                >
                    <Tooltip title="E-mail">
                        <Badge badgeContent={3} color="secondary">
                            <EmailIcon />
                        </Badge>
                    </Tooltip>
                </IconButton>
                <Menu
                    id="email-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean( anchorEl )}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Email 1</MenuItem>
                    <MenuItem onClick={handleClose}>Email 2</MenuItem>
                    <MenuItem onClick={handleClose}>Email 3</MenuItem>
                </Menu>
            </div>
        </Typography>
    );
};

export default EmailHeader;