import React, { useEffect } from "react";
import { publicDataAction } from "../../redux/public/saga";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import cc from "currency-codes";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PageTitle from "../Surface/PageTitle";
import { getCurrency, getIsRequestReady } from "../../redux/selectors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));


const Exchange: React.FC = () => {

  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrency);
  const isRequestReady = useAppSelector(getIsRequestReady);

  useEffect(() => {
    isRequestReady && dispatch(publicDataAction.getCurrency());
  }, [isRequestReady]);

  const getCurrencyRate = (rate: number): string => {
    if (rate === 0) return "-";
    return String(rate.toFixed(2));
  };


  return (
    <div>
      <PageTitle title={'Exchange rate'}/>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Exchange</StyledTableCell>
              <StyledTableCell sx={{display: {xs: 'none', md: 'table-cell'}}}>Currency</StyledTableCell>
              <StyledTableCell>Sell</StyledTableCell>
              <StyledTableCell>Cross</StyledTableCell>
              <StyledTableCell>Buy</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currency.map((item, index) => (
              cc.number(String(item.currencyCodeA))?.code !== undefined
                ? <StyledTableRow key={index}>
                  <StyledTableCell>
                    <Typography component='span' sx={{fontWeight: 'bold'}}>
                      {cc.number(String(item.currencyCodeA))?.code}
                    </Typography>/
                    <Typography component='span' sx={{fontWeight: 'bold'}}>
                      {cc.number(String(item.currencyCodeB))?.code}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell sx={{display: {xs: 'none', md: 'table-cell'}}} >
                    <Typography sx={{fontSize: 18}}>
                      {cc.number(String(item.currencyCodeA))?.currency}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>{getCurrencyRate(item.rateSell)}</StyledTableCell>
                  <StyledTableCell>{getCurrencyRate(item.rateCross)}</StyledTableCell>
                  <StyledTableCell>{getCurrencyRate(item.rateBuy)}</StyledTableCell>
                </StyledTableRow>
                : null
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Exchange;