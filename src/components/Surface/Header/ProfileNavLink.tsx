import React from "react";
import Typography from "@mui/material/Typography";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface props {
  closeProfile: () => void
}

const ProfileNavLink: React.FC<props> = ({ closeProfile }:props) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (): void => {
    setAnchorEl(null);
    closeProfile()
  };

  return (
    <MenuItem>
        <Typography onClick={handleClick} sx={{ fontWeight: "bold"}}>
          Profile
          <KeyboardArrowDownIcon sx={{fontSize: 20, position: 'relative', top: 4}}/>
        </Typography>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem sx={{ fontWeight: "bold"}} onClick={handleClose}>Information</MenuItem>
        <MenuItem sx={{ fontWeight: "bold"}} onClick={handleClose}>Accounts</MenuItem>
        <MenuItem sx={{ fontWeight: "bold"}} onClick={handleClose}>Jars</MenuItem>
      </Menu>
    </MenuItem>
  );
};

export default ProfileNavLink;