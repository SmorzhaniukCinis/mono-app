import React, { useEffect } from "react";
import Header from "./components/Surface/Header/Header";
import Footer from "./components/Surface/Footer";
import Container from "./components/Surface/Container";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { personDataAction } from "./redux/client/ClientSaga";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getIsClientInfoReady } from "./redux/selectors";
import ErrorMessageWrapper from "./components/Surface/ErrorMessageWrapper";
import AppLoader from "./components/Surface/AppLoader";

function App(): JSX.Element {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  const isClientInfoReady = useAppSelector(getIsClientInfoReady);


  useEffect(() => {
    if (pathname === "/") {
      navigate("/exchange");
    }
  }, []);

  useEffect(() => {
    if (token !== undefined && isClientInfoReady) {
      dispatch(personDataAction.fetchClientInfo());
    }
  }, []);


  return (
    <Box sx={{ backgroundColor: "secondary.main" }}>
      <AppLoader/>
      <ErrorMessageWrapper />
      <Header />
      <Container />
      <Footer />
    </Box>
  );
}

export default App;
