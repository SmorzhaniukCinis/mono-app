import React, { useEffect } from "react";
import { personDataAction } from "../../redux/client/ClientSaga";
import { useAppDispatch } from "../../redux/hooks";

const Transactions: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const d = new Date();
    const from = d.setMonth(d.getMonth() - 1);
    dispatch(personDataAction.fetchTransactions("0", String(from), String(Date.now())))
  });

  console.log(Date.now());
  return (
    <div>
      t
    </div>
  );
};

export default Transactions;