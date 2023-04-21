import React from "react";
import Box from "@mui/material/Box";

const Accounts:React.FC = () => {



  return (
    <Box sx={{display: 'grid', gridTemplateColumns: {md: '1fr 1fr', xs: '1fr'}, gridGap: 50}}>
      <Box sx={{backgroundColor: '#000', width: '100%', aspectRatio: '10/6', borderRadius: 5, boxShadow: '2px 38px 15px -20px gray',}}></Box>
      <Box sx={{backgroundColor: '#000', width: '100%', aspectRatio: '10/6', borderRadius: 5, boxShadow: '2px 38px 15px -20px gray',}}></Box>
      <Box sx={{backgroundColor: '#000', width: '100%', aspectRatio: '10/6', borderRadius: 5, boxShadow: '2px 38px 15px -20px gray',}}></Box>
      <Box sx={{backgroundColor: '#000', width: '100%', aspectRatio: '10/6', borderRadius: 5, boxShadow: '2px 38px 15px -20px gray',}}></Box>
    </Box>
  );
};

export default Accounts