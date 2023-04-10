import React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

const ErrorMessage: React.FC = () => {

  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ position: "fixed", top: "90px", right: "20px" }}>
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ErrorMessage;