import React from "react";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { StyledTableCell } from "./TableStyle";

const TableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Exchange</StyledTableCell>
        <StyledTableCell sx={{ display: { xs: "none", md: "table-cell" } }}>Currency</StyledTableCell>
        <StyledTableCell>Cost</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;