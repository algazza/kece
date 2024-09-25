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
              {[cell.plafon, cell.satutahun, cell.duatahun, cell.tigatahun].map(
                (cellmap, index) => (
                  <TableCell
                    key={index}
                    style={{ borderBottom: "1px solid #cbd5e1" }}
                  >
                    {cellmap.toLocaleString("id-ID")}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TabelBiaya;
