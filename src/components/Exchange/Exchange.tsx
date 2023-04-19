import React, { useEffect } from "react";
import { publicDataAction } from "../../redux/public/PublicSaga";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import cc from "currency-codes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import PageTitle from "../Surface/PageTitle";
import { getCurrency, getIsRequestReady } from "../../redux/selectors";
import { setIsRequestReady } from "../../redux/public/PublicSlice";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const Exchange: React.FC = () => {

  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrency);
  const isRequestReady = useAppSelector(getIsRequestReady);

  useEffect(() => {
    isRequestReady && dispatch(publicDataAction.getCurrency());
    setTimeout(() => {
      dispatch(setIsRequestReady(true));
    }, 10000);
  }, []);





  return (
    <div>
      <PageTitle title={"Exchange rate"} />

      <TableContainer component={Paper}>
        <Table>
          <TableHeader/>
          <TableBody>
            {currency.map((item, index) => (
              cc.number(String(item.currencyCodeA))?.code !== undefined
                ? <TableItem key={index} item={item} />
                : null
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Exchange;