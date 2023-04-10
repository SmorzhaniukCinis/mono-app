import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import { getIsAppLoading } from "../../redux/selectors";

const AppLoader:React.FC = () => {

  const isAppLoading = useAppSelector(getIsAppLoading);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isAppLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppLoader;