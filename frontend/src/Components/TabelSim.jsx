import React, { useEffect, useState } from "react";
import { localhostLink } from "../helper/localhost";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TabelDeposito, TabelKredit } from "../helper";

export const TabelSimDeposito = () => {
  return (
    <TableContainer component={Paper} style={{ border: "1px solid #cbd5e1" }}>
      <Table aria-label="tabel rate bunga">
        <TableHead>
        <TableRow className="bg-abuTerang">
            {["Jumlah Deposito", "1 Bulan", "3 Bulan", "6 Bulan", "12 Bulan"].map(
              (row, index) => (
                <TableCell
                  key={index}
                  align="left"
                  style={{
                    borderBottom: "1px solid #cbd5e1",
                    fontWeight: "bold",
                  }}
                >
                  {row}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {TabelDeposito.map((cell, index) => (
            <TableRow key={index} className={index % 2 && "bg-abuTerang"}>
              {[cell.jumlah, cell.satubulan, cell.tigabulan, cell.enambulan, cell.satutahun].map(
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
  );
};

export const TabelSimKredit = () => {
  return (
    <TableContainer component={Paper} style={{ border: "1px solid #cbd5e1" }}>
      <Table aria-label="tabel rate bunga">
        <TableHead>
        <TableRow className="bg-abuTerang">
            {["Plafon", " 12 Bulan", "24 Bulan", "36 Bulan"].map(
              (row, index) => (
                <TableCell
                  key={index}
                  align="left"
                  style={{
                    borderBottom: "1px solid #cbd5e1",
                    fontWeight: "bold",
                  }}
                >
                  {row}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {TabelKredit.map((cell, index) => (
            <TableRow key={index} className={index % 2 && "bg-abuTerang"}>
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
  );
};
