import React, { useEffect } from "react";
import { publicDataAction } from "../../redux/counter/saga";
import { useAppDispatch } from "../../redux/hooks";

const Exchange:React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect( () => {
    dispatch(publicDataAction.getCurrency())
  }, [])

  return (
    <div>
      Exchange
    </div>
  );
};

export default Exchange;