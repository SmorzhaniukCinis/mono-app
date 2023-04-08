import * as React from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import PageTitle from "../Surface/PageTitle";
import ErrorIcon from "@mui/icons-material/Error";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { personDataAction } from "../../redux/client/saga";
import { getToken } from "../../redux/selectors";

const Authorization: React.FC = () => {

  const [tokenField, setTokenField] = useState<string>("uHZzmBxpJDv-RnX-AAg3b_69XUrnTkOm7Kxmy3xBmTu4");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token  = useAppSelector(getToken)

  const validation = (): void => {
    if (tokenField.length === 44) {
      checkToken(tokenField)
      setError("");
    } else {
      setError("Token must contain 44 chars.");
    }
  }
  const checkToken = (token: string):void => {
    dispatch(personDataAction.getClientInfo(token))
  }
  useEffect(() => {
    if (token !== '')
      navigate('profile')
  },[])

  return (
    <div>
      <PageTitle title="Authorization" />
      <Typography sx={{ pt: 3, pb: 3, fontSize: 20 }}>
        You need go to&nbsp;
        <Typography onClick={() => navigate('https://api.monobank.ua')}
                    component='a'
                    sx={{
                      fontWeight: "bold",
                      color: "red",
                      textDecoration: "underline",
                      cursor: "pointer",
                      fontSize: 20
                    }}>
          this link
        </Typography>
        &nbsp;and get your personal token, then copy and paste token in field below.
      </Typography>
      <TextField value={tokenField} onChange={(e) => setTokenField(e.target.value)}
                 color="secondary" label="Token" variant="outlined" fullWidth />
      {error !== ''
          ? <Box sx={{mt: 2}} display="flex">
            <ErrorIcon sx={{ color: "red", fontSize: 21 }} />
            <Typography sx={{ color: "red" }}>{error}</Typography>
          </Box>
          : null
      }
      <Button size='large' variant={"outlined"} onClick={() => validation()}
              color="success" sx={{ color: "black", mt: 5, mb: 5 }}>
        Sing in
      </Button>
    </div>
  );
};

export default Authorization;
