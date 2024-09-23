import React, { useEffect, useState } from "react";
import { localhostLink } from "../helper/localhost";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TabelSim = () => {
  const [rateKredit, setRateKredit] = useState([]);

  useEffect(() => {
    fetch(`${localhostLink}/api/ratedKredit`)
      .then((response) => response.json())
      .then((data) => setRateKredit(data))
      .catch((error) => {
        console.error("error fetching rate bunga kredit:", error);
      });
  }, []);

  return (
    <TableContainer component={Paper} style={{ border: "1px solid black" }}>
      <Table aria-label="tabel rate bunga">
        <TableHead>
          <TableRow>
            {["Plafon", " 12 Bulan", "24 Bulan", "36 Bulan"].map(
              (row, index) => (
                <TableCell
                  key={index}
                  align="left"
                  className="bg-biruMuda-400"
                  style={{
                    borderBottom: "1px solid black",
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
          {rateKredit.map((cell, index) => (
            <TableRow key={index}>
              {[cell.plafon, cell.bulan_12, cell.bulan_24, cell.bulan_36].map(
                (cellmap, index) => (
                  <TableCell
                    key={index}
                    style={{ borderBottom: "1px solid black" }}
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

export default TabelSim;
