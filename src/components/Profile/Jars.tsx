import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { getClientInfoSelector } from "../../redux/selectors";
import JarItem from "./JarItem";
import Box from "@mui/material/Box";

const Jars: React.FC = () => {

  const clientInfo = useAppSelector(getClientInfoSelector);

  return (
    <Box sx={{
      display: "grid",
      gap: { md: "80px", xs: '40px' },
      gridTemplateColumns: { md: "1fr 1fr 1fr", xs: "1fr" }
    }}>
      {clientInfo?.jars.map(jar => <JarItem key={jar.id} jar={jar} />)}
    </Box>
  );
};

export default Jars;