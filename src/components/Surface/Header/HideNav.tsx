import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProfileNavLink from "./ProfileNavLink";

const HideNav: React.FC = () => {

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  return (
    <Box display={{ xs: "block", md: "none" }}>
      <IconButton onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>

      <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center" sx={{ fontWeight: "bold" }}>Exchange rate</Typography>
        </MenuItem>

        <ProfileNavLink closeProfile={handleCloseNavMenu} />

        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center" sx={{ fontWeight: "bold" }}>Transaction</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography textAlign="center" sx={{ fontWeight: "bold" }}>Authorization</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};


export default HideNav;