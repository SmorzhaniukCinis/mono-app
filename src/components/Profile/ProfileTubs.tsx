import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import TabContentWrapper from "./TabContentWrapper";


function a11yProps(index: number): any {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,

  };
}

const tabStyle = {
  fontSize: 25,
  textTransform: 'unset',
  pl: 5,
  pr: 5
}

const ProfileTubs: React.FC = () => {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const location = useLocation()


  const handleChange = (event: React.SyntheticEvent, newValue: number): any => {
    setValue(newValue);
    if (newValue === 0) navigate('/profile/accounts')
    else  navigate('/profile/jars')
  };
  useEffect(() => {
    if (location.pathname === '/profile/jars') setValue(1)
  })

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab sx={tabStyle} label="Cards" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Jars" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabContentWrapper index={0} value={value}/>
      <TabContentWrapper index={1} value={value}/>
    </Box>
  );
};

export default ProfileTubs;