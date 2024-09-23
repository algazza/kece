import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TabelBiaya = () => {
  return (
    <TableContainer sx={{ width: 600 }} component={Paper} style={{ border: "1px solid black" }}>
      <Table aria-label="tabel rate bunga">
        <TableBody>
          <TableRow>
            <TableCell>Biaya Admin</TableCell>
            <TableCell>2000</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Biaya Mimin</TableCell>
            <TableCell>2000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelBiaya;
