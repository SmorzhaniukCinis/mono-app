import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../redux/hooks";
import { getClientInfoSelector } from "../../redux/selectors";
import cc from "currency-codes";

const cardStyle = {
  backgroundColor: "#000",
  width: "100%",
  aspectRatio: "10/6",
  borderRadius: 5,
  boxShadow: "2px 38px 15px -20px gray"
};
const cardLogoStyle = {
  color: "white",
  lineHeight: 1,
  fontSize: 23,
  fontFamily: "\"Rubik\", sans-serif;",
  textAlign: "end"
};

const Accounts: React.FC = () => {

  const clientInfo = useAppSelector(getClientInfoSelector);
  const refactorBalance = (balance: number): string => {
    return new Intl.NumberFormat("en-US").format(balance / 100) + " ";
  };

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" }, gridGap: 50 }}>
      {
        clientInfo?.accounts.map(account => <Box key={account.id} sx={cardStyle}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: 145, pt: 1 }}>
              <Typography sx={cardLogoStyle}>monobank</Typography>
              <Typography sx={{ color: "white", fontSize: 8, textAlign: "end" }}>Universal Bank</Typography>
            </Box>
            <Typography color="white" sx={{ fontSize: 20, pt: 1, pr: 5 }}>
              {account.type}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: 30, color: "white", textAlign: "center", pt: { md: 5, xs: 3 } }}>
            {account.maskedPan[0]}
          </Typography>
          <Box sx={{ mt: { md: 3, xs: 1 }, ml: 2 }}>
            <Typography sx={{ color: "white", mb: 1 }}>
              Balance: {refactorBalance(account.balance) + String(cc.number(String(account.currencyCode))?.code)}
            </Typography>
            <Typography sx={{ color: "white", fontSize: 14 }}>
              IBAN: {account.iban}
            </Typography>
          </Box>
        </Box>)
      }
    </Box>
  );
};

export default Accounts;