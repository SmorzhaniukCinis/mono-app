import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header:React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{pl: '5%', pr: '5%', pt: 1, pb: 1}} color='inherit'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1}}>
                        <Typography sx={{fontSize: 32, fontWeight: 'bold'}} component='span'>mono</Typography>
                        <Typography sx={{fontSize: 28}} component='span'>App</Typography>
                    </Typography>
                    <Button sx={{fontSize: 16, fontWeight: 'bold'}} color="inherit">Authorization</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;