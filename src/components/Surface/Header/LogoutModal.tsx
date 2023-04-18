import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../redux/hooks";
import { setToken } from "../../../redux/client/ClientSlice";

const modalStyle = {
  width: { md: "auto", xs: "70%" },
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "1px solid #000",
  boxShadow: 24,
  p: 6
};
const buttonStyle = {
  pl: { md: 4, xs: 0 }, pr: { md: 4, xs: 0 }
};

interface props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const LogoutModal: React.FC<props> = ({ isModalOpen, closeModal }: props) => {

  const dispatch = useAppDispatch();

  const logout = (): void => {
    dispatch(setToken(""));
    closeModal();
  };

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <Paper sx={modalStyle}>
        <Typography sx={{ textAlign: "center", fontSize: { md: 30, xs: 20 } }}>
          Are you really want logout?
        </Typography>
        <Box sx={{ display: "flex", pt: 4, justifyContent: "space-around" }}>
          <Button onClick={logout} sx={buttonStyle} color="success" variant="outlined">yes</Button>
          <Button onClick={closeModal} sx={buttonStyle} color="error" variant="outlined">No</Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default LogoutModal;