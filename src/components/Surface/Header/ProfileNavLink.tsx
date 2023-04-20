import React from "react";
import Typography from "@mui/material/Typography";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface props {
  closeProfile: (path: string) => void
}

const ProfileNavLink: React.FC<props> = ({ closeProfile }:props) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (path?: string): void => {
    setAnchorEl(null);
    path != null && closeProfile(path)
  };

  return (
    <MenuItem>
        <Typography onClick={handleClick} sx={{ fontWeight: "bold"}}>
          Profile
          <KeyboardArrowDownIcon sx={{fontSize: 20, position: 'relative', top: 4}}/>
        </Typography>
      <Menu anchorEl={anchorEl} open={open} onClose={()=>handleClose()}>
        <MenuItem sx={{ fontWeight: "bold"}} onClick={()=>handleClose('profile/accounts')}>Accounts</MenuItem>
        <MenuItem sx={{ fontWeight: "bold"}} onClick={()=>handleClose('profile/jars')}>Jars</MenuItem>
      </Menu>
    </MenuItem>
  );
};

export default ProfileNavLink;