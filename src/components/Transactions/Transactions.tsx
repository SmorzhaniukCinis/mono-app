import React, { useEffect } from "react";
import { personDataAction } from "../../redux/client/ClientSaga";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import PageTitle from "../Surface/PageTitle";
import { getTransactions } from "../../redux/selectors";
import TransactionItem from "./TransactionItem";

const Transactions: React.FC = () => {

  const dispatch = useAppDispatch()
  const transactions = useAppSelector(getTransactions)

  useEffect(() => {
    const d = new Date();
    const from = d.setMonth(d.getMonth() - 1);
    dispatch(personDataAction.fetchTransactions("0", String(from), String(Date.now())));
  });

  return (
    <div>
      <PageTitle title={'Transactions'}/>
      <div>
        {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction}/> )}
      </div>
    </div>
  );
};

export default Transactions;