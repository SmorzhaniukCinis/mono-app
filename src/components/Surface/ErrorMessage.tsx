import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import { cleanErrorMessage } from "../../redux/public/PublicSlice";
import { useAppDispatch } from "../../redux/hooks";

interface props {
  error: string;
}

const ErrorMessage: React.FC<props> = ({ error }) => {

  const [open, setOpen] = React.useState(true);
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
        dispatch(cleanErrorMessage(error))
      }, 10000)
  },[])

  return (
    <Collapse sx={{mb: 1}} in={open}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}>
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {error}
      </Alert>
    </Collapse>
  );
};

export default ErrorMessage;