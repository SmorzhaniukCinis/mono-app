import React, { useEffect } from "react";
import Header from "./components/Surface/Header/Header";
import Footer from "./components/Surface/Footer";
import Container from "./components/Surface/Container";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

function App(): JSX.Element {

  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname === '/') {
      navigate('/exchange')
    }
  }, [])

    return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
          <Header/>
          <Container/>
          <Footer/>
        </Box>
    );
}

export default App;
