import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

interface props {
  value: number
  index: number
}

const TabContentWrapper:React.FC<props> = ({value, index}:props) => {
  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Outlet/>
        </Box>
      )}
    </div>
  );
};

export default TabContentWrapper;