import React from 'react';
import Header from "./components/Surface/Header/Header";
import Footer from "./components/Surface/Footer";
import Container from "./components/Surface/Container";
import Box from "@mui/material/Box";

function App(): JSX.Element {

    return (
        <Box sx={{backgroundColor: 'secondary.main'}}>
          <Header/>
          <Container/>
          <Footer/>
        </Box>
    );
}

export default App;
