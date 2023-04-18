import React from "react";
import Box from "@mui/material/Box";
import ErrorMessage from "./ErrorMessage";
import { useAppSelector } from "../../redux/hooks";
import { getErrorMessages } from "../../redux/selectors";

const ErrorMessageWrapper: React.FC = () => {

  const errorMessage = useAppSelector(getErrorMessages)

  return (
    <Box sx={{ position: "fixed", top: "90px", right: "20px" }}>
      {errorMessage?.map((error, index) => <ErrorMessage key={index} error={error}/> )}
    </Box>
  );
};

export default ErrorMessageWrapper