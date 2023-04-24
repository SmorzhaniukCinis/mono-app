import React from "react";
import jarImage from "../../images/jarCut.jpg";
import Box from "@mui/material/Box";
import { jarType } from "../../API/PersonDataTypes";
import Typography from "@mui/material/Typography";
import cc from "currency-codes";

interface props {
  jar: jarType;
}

const descriptionStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "3px solid black",
  width: "70%",
  borderRadius: 1,
  p: "10px"
};

const ToFormString = (name: string, number:number, currencyCode: number):string | null => {
  if (number !== null) {
    return `${name}: ${String(number / 100) + ' ' + String(cc?.number(String(currencyCode))?.code)} `
  }
  return null
}

const JarItem: React.FC<props> = ({ jar }) => {
  return (
    <Box sx={{ position: "relative", alignItems: "center", p: {xs: 2, md: 1}}}>
      <Box sx={descriptionStyle}>
        <Typography sx={{ fontFamily: "'Caveat', cursive", fontSize: 23, fontWeight: "bold" }}>
          {jar.title}
        </Typography>
        <Typography sx={{ fontFamily: "'Caveat', cursive", fontSize: 15, fontWeight: "bold" }}>
          {jar.description}
        </Typography>
        <Typography sx={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: "bold" }}>
          {ToFormString('Balance', jar.balance, jar.currencyCode)}
        </Typography>
        <Typography sx={{ fontFamily: "'Caveat', cursive", fontSize: 18, fontWeight: "bold" }}>
          {ToFormString('Goal', jar.goal, jar.currencyCode)}
        </Typography>
      </Box>
      <img src={jarImage} alt={jar.id} style={{ width: "100%" }} />
    </Box>
  );
};

export default JarItem;