import React from "react";
import Typography from "@mui/material/Typography";

interface props {
  title:string
}

const PageTitle:React.FC<props> = ({title}:props) => {
  return (
    <Typography variant='h4' sx={{pb: 3, pt: 1}}>{title}</Typography>
  );
};

export default PageTitle;