import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const cardStyle = {
  backgroundColor: '#000',
  width: '100%',
  aspectRatio: '10/6',
  borderRadius: 5,
  boxShadow: '2px 38px 15px -20px gray',
}

const Accounts:React.FC = () => {

  return (
    <Box sx={{display: 'grid', gridTemplateColumns: {md: '1fr 1fr', xs: '1fr'}, gridGap: 50}}>
      <Box sx={cardStyle}>
        <Box sx={{width: 145, pt: 1}}>
          <Typography sx={{color: 'white', lineHeight: 1, fontSize: 23, fontFamily: '"Rubik", sans-serif;', textAlign: 'end'}}>monobank</Typography>
          <Typography sx={{color: 'white', fontSize: 8, textAlign: 'end'}}>Universal Bank</Typography>
        </Box>
      </Box>
      <Box sx={cardStyle}></Box>
      <Box sx={cardStyle}></Box>
      <Box sx={cardStyle}></Box>
      <Box sx={cardStyle}></Box>
      <Box sx={cardStyle}></Box>
    </Box>
  );
};

export default Accounts