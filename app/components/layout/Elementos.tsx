import * as React from 'react';
import Grid from '@mui/material/Grid';
import NotificationHeader from './Notification';
import EmailHeader from './Email';
import UserHeader from './User';
import { Hidden } from '@mui/material';


const ElementosHeader = () =>
{
    return (
        <>
            <Grid item sm={1} lg={1}>
                <Hidden xsDown>
                    <NotificationHeader />
                </Hidden>
            </Grid>
            <Grid item sm={1} lg={1}>
                <EmailHeader />
            </Grid>
            <Grid item sm={1} lg={1}>
                <UserHeader />
            </Grid>

        </>
    );
};

export default ElementosHeader;