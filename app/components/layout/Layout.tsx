// Layout.tsx
import React from "react";
import Box from "@mui/material/Box";

type Props = {
  children: React.ReactNode;
};

const Layout = ( { children }: Props ) =>
{
  return (
    <div className="flex flex-col flex-grow bg-white">
      <Box
        component="main"
        className="flex-grow p-6"
        sx={{ backgroundColor: "#ffffff" }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Layout;
