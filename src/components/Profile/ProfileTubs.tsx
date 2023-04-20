import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";


function a11yProps(index: number): any {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,

  };
}

const ProfileTubs: React.FC = () => {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number): any => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/profile/accounts')
    }
    else  navigate('/profile/jars')
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab sx={{fontSize: 25, textTransform: 'unset', pl: 5, pr: 5}} label="Cards" {...a11yProps(0)} />
          <Tab sx={{fontSize: 25, textTransform: 'unset', pl: 5, pr: 5}} label="Jars" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <div hidden={value !== 0} id={`simple-tabpanel-${0}`} aria-labelledby={`simple-tab-${0}`}>
        {value === 0 && (
          <Box sx={{ p: 3 }}>
            <Outlet/>
          </Box>
        )}
      </div>
      <div hidden={value !== 1} id={`simple-tabpanel-${1}`} aria-labelledby={`simple-tab-${1}`}>
        {value === 1 && (
          <Box sx={{ p: 3 }}>
            <Outlet/>
          </Box>
        )}
      </div>
    </Box>
  );
};

export default ProfileTubs;