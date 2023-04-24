import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import cc from "currency-codes";
import { accountType } from "../../API/PersonDataTypes";

interface props {
  textColor: string;
  cardColor: string;
  account: accountType
}

const createCardStyle = (color: string):any => ({
  background: color,
  width: "100%",
  aspectRatio: "10/6",
  borderRadius: 5,
  boxShadow: "2px 38px 15px -20px gray"
})
const createCardLogoStyle = (color: string):any => ({
  color,
  lineHeight: 1,
  fontSize: 23,
  fontFamily: "\"Rubik\", sans-serif;",
  textAlign: "end"
})

const refactorBalance = (balance: number, currencyCode: number): string => {
  const correctBalance = new Intl.NumberFormat("en-US").format(balance / 100)
  const currency = String(cc.number(String(currencyCode))?.code)
  return 'Balance: ' + correctBalance + " " + currency;
};

const ClientCard: React.FC<props> = ({ cardColor, textColor, account }: props) => {
  return (
    <Box sx={createCardStyle(cardColor)}>
      <Box display="flex" justifyContent="space-between">
        <Box sx={{ width: 145, pt: 1 }}>
          <Typography sx={createCardLogoStyle(textColor)}>monobank</Typography>
          <Typography sx={{ color: textColor, fontSize: 8, textAlign: "end" }}>Universal Bank</Typography>
        </Box>
        <Typography sx={{ fontSize: 20, pt: 1, pr: 5, color: textColor}}>
          {account.type}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 30, color: textColor, textAlign: "center", pt: { md: 5, xs: 3 } }}>
        {account.maskedPan[0]}
      </Typography>
      <Box sx={{ mt: { md: 3, xs: 1 }, ml: 2 }}>
        <Typography sx={{ color: textColor, mb: 1 }}>
          {refactorBalance(account.balance, account.currencyCode)}
        </Typography>
        <Typography sx={{ color: textColor, fontSize: 14 }}>
          IBAN: {account.iban}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientCard;