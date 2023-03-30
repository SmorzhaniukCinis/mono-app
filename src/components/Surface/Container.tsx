import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";


const Container: React.FC = () => {
  return (
    <Box minHeight="80vh">
      <Box  sx={{padding: {xs: '0 5%', md: '30px 15%'}}}>
        <Paper elevation={5} sx={{p: {xs: 1, md: 3}}}>
          <Outlet/>
        </Paper>
      </Box>
    </Box>
  );
};

export default Container;