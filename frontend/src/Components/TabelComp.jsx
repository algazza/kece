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
import { PenempatanDana } from "../helper";
// =================== Tabel ===========================
const calculateRowSpan = (data, key) => {
  const rowSpanData = [];
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    if (i === data.length - 1 || data[i][key] !== data[i + 1][key]) {
      rowSpanData.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  return rowSpanData;
};

const rowSpanAmount = calculateRowSpan(PenempatanDana, "amount");

const TabelComp = ({kredit}) => {
  let amountIndex = 0;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="data tabel">
        <TableHead>
          <TableRow className="bg-biruMuda-400">
            <TableCell align="center" style={{ border: "1px solid black" }}>
              No
            </TableCell>
            <TableCell style={{ border: "1px solid black" }}>
              Nominal Tabungan
            </TableCell>
            <TableCell style={{ border: "1px solid black" }}>
              Jangka Waktu (Tahun)
            </TableCell>
            <TableCell style={{ border: "1px solid black" }}>
              Nominal Hadiah
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {kredit.map((row, index, idx) => {
            let shouldRenderAmountCell = false;

            if (
              index === 0 ||
              row.amount !== PenempatanDana[index - 1].amount
            ) {
              shouldRenderAmountCell = true;
            }

            const amountCell = shouldRenderAmountCell ? (
              <TableCell
                rowSpan={rowSpanAmount[amountIndex]}
                style={{ borderLeft: "1px solid black" }}
              >
                {row.amount.toLocaleString("id-ID")}
              </TableCell>
            ) : null;

            if (shouldRenderAmountCell) {
              amountIndex += 1;
            }

            return (
              <TableRow key={idx}>
                <TableCell
                  align="center"
                  style={{ borderLeft: "1px solid black" }}
                >
                  {index + 1}
                </TableCell>
                {amountCell}
                <TableCell style={{ borderLeft: "1px solid black" }}>
                  {row.term}
                </TableCell>
                <TableCell
                  style={{
                    borderLeft: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                >
                  {row.reward.toLocaleString("id-ID")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelComp;
