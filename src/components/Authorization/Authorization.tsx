import * as React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import PageTitle from "../Surface/PageTitle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { personDataAction } from "../../redux/client/ClientSaga";
import AuthBody from "./AuthBody";
import { getToken } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

const Authorization: React.FC = () => {

  const [tokenField, setTokenField] = useState<string>("uHZzmBxpJDv-RnX-AAg3b_69XUrnTkOm7Kxmy3xBmTu4");
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken)
  const navigate = useNavigate()

  const validation = (): void => {
    if (tokenField.length === 44) {
      checkToken(tokenField);
      setError("");
    } else {
      setError("Token must contain 44 chars.");
    }
  };
  const checkToken = (token: string): void => {
    dispatch(personDataAction.checkClientToken(token));
  };

  useEffect(() => {
    if(token !== '')
    navigate('/profile/accounts')
  }, [token])

  return (
    <div>
      <PageTitle title="Authorization" />
      <AuthBody error={error} setTokenField={setTokenField} tokenField={tokenField} />
      <Button size="large" variant={"outlined"} onClick={() => validation()}
              color="success" sx={{ color: "black", mt: 5, mb: 5 }}>
        Sing in
      </Button>
    </div>
  );
};

export default Authorization;
