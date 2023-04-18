import React from "react";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

interface props {
  setTokenField: (field: string) => void
  tokenField: string
  error: string
}

const AuthBody:React.FC<props> = ({setTokenField, tokenField, error}: props) => {

  const navigate = useNavigate();

  return (
    <>
      <Typography sx={{ pt: 3, pb: 3, fontSize: 20 }}>
        You need go to&nbsp;
        <Typography onClick={() => navigate("https://api.monobank.ua")}
                    component="a"
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
      {error !== ""
        ? <Box sx={{ mt: 2 }} display="flex">
          <ErrorIcon sx={{ color: "red", fontSize: 21 }} />
          <Typography sx={{ color: "red" }}>{error}</Typography>
        </Box>
        : null
      }
    </>
  );
};

export default AuthBody;