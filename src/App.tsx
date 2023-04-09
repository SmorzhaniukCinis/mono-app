import React, { useEffect } from "react";
import Header from "./components/Surface/Header/Header";
import Footer from "./components/Surface/Footer";
import Container from "./components/Surface/Container";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { personDataAction } from "./redux/client/ClientSaga";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getIsAppLoading, getIsClientInfoReady } from "./redux/selectors";
import { Backdrop, CircularProgress } from "@mui/material";

function App(): JSX.Element {

  const {pathname} = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const token = localStorage.getItem('token')
  const isClientInfoReady = useAppSelector(getIsClientInfoReady)
  const isAppLoading = useAppSelector(getIsAppLoading)

  useEffect(() => {
    if (pathname === '/') {
      navigate('/exchange')
    }
  }, [])

  useEffect(() => {
    if (token !== undefined && isClientInfoReady) {
      dispatch(personDataAction.fetchClientInfo())
    }
  }, [])

    return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isAppLoading}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Header/>
          <Container/>
          <Footer/>
        </Box>
    );
}

export default App;
