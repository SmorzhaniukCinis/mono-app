import React, { useEffect, useState } from "react";
import { personDataAction } from "../../redux/client/ClientSaga";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PageTitle from "../Surface/PageTitle";
import { getTransactions } from "../../redux/selectors";
import TransactionItem from "./TransactionItem";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FindReplaceIcon from '@mui/icons-material/FindReplace';

const iconStyle = {
  position: 'relative',
  bottom: 1,
  pr: 1,
  pl: 1
}

const Transactions: React.FC = () => {

  const dispatch = useAppDispatch();
  const transactions = useAppSelector(getTransactions);
  const [timer, setTimer] = useState(70);

  const searchMoreTransaction = ():void => {
    setTimer(70)
  }

  useEffect(() => {
    let time = timer;
    setTimeout(() => {
      if (time > 0) {
        setTimer(--time);
      }
    }, 1000);
  }, [timer]);

  useEffect(() => {
    const d = new Date();
    const from = d.setMonth(d.getMonth() - 1);
    dispatch(personDataAction.fetchTransactions("0", String(from), String(Date.now())));
  });

  return (
    <div>
      <PageTitle title={"Transactions"} />
      <div>
        {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)}
      </div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button disabled={timer > 0} size="large" variant="contained" onClick={searchMoreTransaction}>
          {timer> 0 ? timer : null}
          {timer > 0 ?<SyncProblemIcon sx={iconStyle} /> :<FindReplaceIcon sx={iconStyle}/> }
          Load more
        </Button>
      </Box>
    </div>
  );
};

export default Transactions;