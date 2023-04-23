import React from "react";
import Box from "@mui/material/Box";
import { useAppSelector } from "../../redux/hooks";
import { getClientInfoSelector } from "../../redux/selectors";
import ClientCard from "./ClientCard";

const selectColor = (cardType:string): { textColor: string, cardColor: string } => {
  switch (cardType) {
    case "eAid":
      return {
        textColor: "black",
        cardColor: "linear-gradient(138deg, rgba(57,231,217,1) 31%, rgba(0,212,255,1) 100%)"
      };
    case "black":
      return {
        textColor: "white",
        cardColor: "#381919"
      };
    case "white":
      return {
        textColor: "black",
        cardColor: "#f1f1f1"
      };
    default:
      return {
        textColor: "white",
        cardColor: "#381919"
      };
  }
};

const Accounts: React.FC = () => {

  const clientInfo = useAppSelector(getClientInfoSelector);

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gridGap: 50 }}>
      {
        clientInfo?.accounts.map(account => {
          const {textColor, cardColor} = selectColor(account.type)
          return (<ClientCard key={account.id} account={account} textColor={textColor} cardColor={cardColor}/>);
        })
      }
    </Box>
  );
};

export default Accounts;