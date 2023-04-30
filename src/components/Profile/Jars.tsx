import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getClientInfoSelector } from "../../redux/selectors";
import JarItem from "./JarItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Jars: React.FC = () => {

  const clientInfo = useAppSelector(getClientInfoSelector);

  return (
    <Box sx={{
      display: "grid",
      gap: { md: "80px", xs: "40px" },
      gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" }
    }}>
      {clientInfo?.jars.length === 0
        ? <Typography sx={{ fontSize: 25, pt: "100px", pb: "100px" }}>You have no jars</Typography>
        : clientInfo?.jars.map(jar => <JarItem key={jar.id} jar={jar} />)}
    </Box>
  );
};

export default Jars;