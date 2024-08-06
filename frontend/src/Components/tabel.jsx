import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const calculateRowSpan = (data) => {
  const rowSpanAmount = [];
  let count = 1;

  for (let i = 0; i < data.length; i++) {
    if (i === data.length - 1 || data[i].amount !== data[i + 1].amount) {
      rowSpanAmount.push(count);
      count = 1;
    } else {
      count++;
    }
  }

  return rowSpanAmount;
};

// Data yang digunakan
const data = [
  { amount: 100000000, term: '1 tahun', reward: 4000000 },
  { amount: 100000000, term: '2 tahun', reward: 8000000 },
  { amount: 100000000, term: '3 tahun', reward: 12000000 },
  { amount: 200000000, term: '1 tahun', reward: 8000000 },
  { amount: 200000000, term: '2 tahun', reward: 16000000 },
  { amount: 200000000, term: '3 tahun', reward: 24000000 },
  { amount: 300000000, term: '1 tahun', reward: 8000000 },
  { amount: 300000000, term: '2 tahun', reward: 16000000 },
  { amount: 300000000, term: '3 tahun', reward: 24000000 },
];

const rowSpanAmount = calculateRowSpan(data);

const CustomTable = () => {
  let amountIndex = 0;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: '1px solid black' }}>No</TableCell>
            <TableCell style={{ border: '1px solid black' }}>Nominal Tabungan</TableCell>
            <TableCell style={{ border: '1px solid black' }}>Jangka Waktu (Tahun)</TableCell>
            <TableCell style={{ border: '1px solid black' }}>Nominal Hadiah</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            let shouldRenderAmountCell = false;

            if (index === 0 || row.amount !== data[index - 1].amount) {
              shouldRenderAmountCell = true;
            }

            const amountCell = shouldRenderAmountCell ? (
              <TableCell rowSpan={rowSpanAmount[amountIndex]} style={{ border: '1px solid black' }}>
                {row.amount.toLocaleString('id-ID')}
              </TableCell>
            ) : null;

            if (shouldRenderAmountCell) {
              amountIndex += 1;
            }

            return (
              <TableRow key={index}>
                <TableCell style={{ border: '1px solid black' }}>{index + 1}</TableCell>
                {amountCell}
                <TableCell style={{ border: '1px solid black' }}>{row.term}</TableCell>
                <TableCell style={{ border: '1px solid black' }}>{row.reward.toLocaleString('id-ID')}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
