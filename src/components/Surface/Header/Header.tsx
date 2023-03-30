import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FullNav from "./FullNav";
import HideNav from "./HideNav";


const Header: React.FC = () => {

  return (
    <Box sx={{ flexGrow: 1, height: "10vh" }}>
      <AppBar sx={{ pl: { xs: "0", md: "5%" }, pr: { xs: "0", md: "5%" }, pt: 0.5, pb: 1 }} color="inherit">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontSize: 32, fontWeight: "bold" }} component="span">mono</Typography>
            <Typography sx={{ fontSize: 28 }} component="span">App</Typography>
          </Typography>
          <FullNav/>
          <HideNav/>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;