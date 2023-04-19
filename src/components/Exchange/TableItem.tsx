import React from "react";
import Typography from "@mui/material/Typography";
import cc from "currency-codes";
import { currencyType } from "../../API/PublicDataTypes";
import { StyledTableCell, StyledTableRow } from "./TableStyle";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const getCurrencyRate = (currency: currencyType): string => {
  if (currency.rateCross === 0) {
    return String(currency.rateBuy.toFixed(2) + " / " + currency.rateSell.toFixed(2))
  } else {
    return String(currency.rateCross.toFixed(2))
  }
};

const CurrencyCostCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}));

interface props {
  item: currencyType;
}

const TableItem: React.FC<props> = ({ item }: props) => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {cc.number(String(item.currencyCodeA))?.code}
        </Typography>/
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          {cc.number(String(item.currencyCodeB))?.code}
        </Typography>
      </StyledTableCell>
      <StyledTableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
        <Typography sx={{ fontSize: 18 }}>
          {cc.number(String(item.currencyCodeA))?.currency}
        </Typography>
      </StyledTableCell>
      <CurrencyCostCell>{getCurrencyRate(item)}</CurrencyCostCell>
    </StyledTableRow>
  );
};

export default TableItem;