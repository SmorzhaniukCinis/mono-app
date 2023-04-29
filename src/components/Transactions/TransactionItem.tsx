import React from "react";
import { transactionType } from "../../API/PersonDataTypes";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import cc from "currency-codes";
import getSymbolFromCurrency from "currency-symbol-map";
import moment from "moment";

interface props {
  transaction: transactionType;
}


const TransactionItem: React.FC<props> = ({ transaction }) => {

  const BGcolor = transaction.amount > 0 ? "rgba(138,190,109,0.42)" : "rgba(224,123,141,0.51)";
  const firstDigits = (transaction.amount / 100).toFixed();
  const secondDigits = "." + String((transaction.amount % 100) === 0 && "00");
  const currency = getSymbolFromCurrency(String(cc.number(String(transaction.currencyCode))?.code));
  const date = moment.unix(transaction.time).format("MMMM D YYYY, h:mm A");

  return (
    <Paper sx={{ mb: 1, p: 1, display: "flex", alignItems: "center", backgroundColor: BGcolor }}>
      <Box sx={{ width: { md: "16%", xs: "30%" }, pl: { md: 3, xs: 0 }}}>
        <Typography component="span" sx={{ fontSize: { md: 30, xs: 20 } }}>{firstDigits}</Typography>
        <Typography component="span" sx={{ fontSize: { md: 21, xs: 15 } }}>{secondDigits}</Typography>
        <Typography component="span" sx={{ fontSize: { md: 25, xs: 17 } }}> {currency}</Typography>
      </Box>
      <Box sx={{ borderLeft: "solid 1px #938F8FFF",  pl: 2, width: "70%" }}>
        <Typography>{transaction.description}</Typography>
        <Typography sx={{ color: "#5d5454", fontSize: 14 }}>{date}</Typography>
      </Box>
    </Paper>
  );
};

export default TransactionItem;