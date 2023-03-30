import React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";

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
      <Button sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
      >
        Profile
      </Button>
      <Menu id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleClose}>Information</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        <MenuItem onClick={handleClose}>Jars</MenuItem>
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