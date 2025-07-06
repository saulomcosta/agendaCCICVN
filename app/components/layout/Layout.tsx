import React from "react";
import Sidebar from "./Sidebar";
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
};

const Layout = ( { children }: Props ) =>
{
  return (
    <div className="h-screen flex flex-row justify-start">
      <Box
        className="bg-primary flex-1"
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: 10 }}>
        {children}
      </Box>
    </div>
  );
};

export default Layout;
