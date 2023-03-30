import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/SmorzhaniukCinis"
  },
  {
    name: "API",
    link: "https://api.monobank.ua/docs/"
  },
  {
    name: "monobank",
    link: "https://www.monobank.ua/?lang=uk"
  },
  {
    name: "FAQ",
    link: "https://uk.wikipedia.org/wiki/FAQ"
  }
];
const Footer: React.FC = () => {
  return (
    <Box height="10vh" sx={{ backgroundColor: "secondary.main" }}>
      <Box sx={{
        borderTop: "1px solid gray",
        m: "0 10%",
        p: "20px",
        display: "flex",
        justifyContent: "space-around"
      }}>
        {
          footerLinks.map((i, index) =>
            <Typography key={index}>
              <Link style={{ color: "black" }} target="_blank" to={i.link}>
                {i.name}
              </Link>
            </Typography>)
        }
      </Box>
    </Box>
  );
};

export default Footer;