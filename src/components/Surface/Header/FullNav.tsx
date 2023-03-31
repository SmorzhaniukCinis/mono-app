import React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const FullNav: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Button sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Exchange rate
      </Button>
      <Button sx={{ fontSize: 15, fontWeight: "bold" }}
              color="inherit"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon/>}
      >
        Profile
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={handleClose}>Information</MenuItem>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={handleClose}>Account</MenuItem>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={handleClose}>Jars</MenuItem>
      </Menu>
      <Button sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Transaction
      </Button>
      <Button sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Authorization
      </Button>
    </Box>
  );
};
export default FullNav;