import React from "react";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";


const FullNav: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (path?: string): void => {
    setAnchorEl(null);
    path != null && navigate(path);
  };

  return (
    <Box display={{ xs: "none", md: "block" }}>
      <Button onClick={() => navigate("exchange")} sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Exchange rate
      </Button>
      <Button sx={{ fontSize: 15, fontWeight: "bold" }}
              color="inherit"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
      >
        Profile
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={() => handleClose("profile/info")}>Information</MenuItem>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={() => handleClose("profile/accounts")}>Accounts</MenuItem>
        <MenuItem sx={{ fontSize: 15, fontWeight: "bold" }} onClick={() => handleClose("profile/jars")}>Jars</MenuItem>
      </Menu>
      <Button onClick={() => navigate("transaction")} sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Transaction
      </Button>
      <Button onClick={() => navigate("authorization")} sx={{ fontSize: 15, fontWeight: "bold" }} color="inherit">
        Authorization
      </Button>
    </Box>
  );
};
export default FullNav;