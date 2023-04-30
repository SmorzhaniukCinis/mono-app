import React, { useEffect } from "react";
import { personDataAction } from "../../redux/client/ClientSaga";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PageTitle from "../Surface/PageTitle";
import { getTransactions } from "../../redux/selectors";
import TransactionItem from "./TransactionItem";
import Typography from "@mui/material/Typography";

const Transactions: React.FC = () => {

  const dispatch = useAppDispatch();
  const transactions = useAppSelector(getTransactions);
  const date = new Date();
  const from = date.setMonth(date.getMonth() - 1);

  useEffect(() => {
    dispatch(personDataAction.fetchTransactions("0", String(from), String(Date.now())));
  });

  return (
    <div>
      <PageTitle title={"Transactions"} />
      {transactions.length !== 0
        ? <div>
          <Typography sx={{pb: 1, fontSize: 20}}>Transaction for the last month</Typography>
          {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
        </div>
        : <Typography sx={{ fontSize: 23, textAlign: "center", pt: "100px", pb: "100px" }}>
          No transaction in the last month(App can not show older transaction)
        </Typography>}
    </div>
  );
};

export default Transactions;