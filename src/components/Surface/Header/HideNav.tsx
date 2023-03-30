import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// @ts-expect-error
import s from './test.module.css'

const HideNav:React.FC = () => {

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
        <MenuItem className={s.container}>
          <Typography textAlign="center" component='span' sx={{ fontWeight: "bold", outline: 'none', }}>Profile</Typography>
          <Box className={s.variant} sx={{display: 'none', position: 'absolute', zIndex: 1}}>
            <Typography sx={style}>1</Typography>
            <Typography sx={style}>2</Typography>
            <Typography sx={style}>3</Typography>
          </Box>
        </MenuItem>
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

const style = {
  float: 'none',
  display: 'block'
}

export default HideNav;