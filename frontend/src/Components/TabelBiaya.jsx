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
import styles from "../helper/style";
import { TabelKredit } from "../helper";

const TabelBiaya = () => {
  return (
    <div>
      <h3 className={`${styles.heading5} text-black my-4 `}>
        Tabel Biaya
      </h3>
      <TableContainer
        sx={{ width: 600 }}
        component={Paper}
        style={{ border: "1px solid #cbd5e1" }}
      >
        <Table aria-label="tabel rate bunga">
        <TableBody>
          {TabelKredit.map((cell, index) => (
            <TableRow key={index} className={index % 2 ? "" : "bg-abuTerang"}>
                  <TableCell
                    style={{ borderBottom: "1px solid #cbd5e1" }}
                  >
                    {cell.label}
                  </TableCell>
                  <TableCell
                    style={{ borderBottom: "1px solid #cbd5e1" }}
                  >
                    {cell.value == isNaN ? (cell.value) : (cell.value.toLocaleString("id-ID"))}
                  </TableCell>
              {/* {[cell.label, cell.value].map(
                (cellmap, index) => (
                )
              )} */}
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TabelBiaya;
