import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../helper/style";
import { motion } from "framer-motion";

const SimulasiCalcKredit = () => {
  const [nominal, setNominal] = useState("");
  const [waktu, setWaktu] = useState();
  const [bunga, setBunga] = useState();
  const [hasilTotal, setHasilTotal] = useState();
  const [hasilBunga, setHasilBunga] = useState();
  const [showResult, setShowResult] = useState(false);
  const [rawNominal, setRawNominal] = useState("");

  const CalcDataFields = [
    {
      label: "Plafon",
      value: `Rp. ${parseInt(rawNominal).toLocaleString("id-ID")}`,
    },
    { label: "Angka Bunga", value: `${bunga}%` },
    { label: "Nilai Bunga", value: hasilBunga },
    {
      label: "Nominal Setoran",
      value: `Rp. ${parseInt(rawNominal).toLocaleString(
        "id-ID"
      )} + ${hasilBunga}`,
    },
  ];

  const formatRupiah = (value) => {
    const numberString = value.replace(/[^,\d]/g, "");
    const split = numberString.split(",");
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  const handleNominalChange = (e) => {
    const rawValue = e.target.value.replace(/\./g, "");
    setRawNominal(rawValue);

    setNominal(formatRupiah(rawValue));
  };

  const handleCalculations = (e) => {
    e.preventDefault();
    const nominalNumber = parseFloat(nominal.replace(/\./g, ""));
    const waktuNumber = parseFloat(waktu);
    const bungaNumber = parseFloat(bunga);

    if (
      !nominal ||
      !waktu ||
      !bunga ||
      nominalNumber <= 0 ||
      waktuNumber <= 0 ||
      bungaNumber <= 0
    ) {
      setHasilTotal("Mohon isi semua field");
      setShowResult(false);
    } else {
      let hasilBungaTotal =
        (nominalNumber * (bungaNumber / 100)) /
        (1 - (1 + (bungaNumber / 100) ** -waktuNumber));
      // nominalNumber * ((bungaNumber / 100) / 12 / 1 - (1 + (bungaNumber / 100) / 12 - waktuNumber));
      let hasilPerkalianTotal = nominalNumber + hasilBungaTotal;

      setHasilTotal(`Rp. ${hasilPerkalianTotal.toLocaleString("id-ID")}`);
      setHasilBunga(`Rp. ${hasilBungaTotal.toLocaleString("id-ID")}`);
      setShowResult(!showResult);
    }
  };

  const handleShowResult = () => {
    if (!nominal || !waktu || !bunga) {
      setShowResult(false);
    } else {
      setShowResult(!showResult);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-biruMuda-200 rounded-3xl p-4"
    >
      {!showResult && (
        <form onSubmit={handleCalculations}>
          <div className="grid gap-2 pt-6">
            <h2 className={`${styles.heading6} text-center`}>Nominal</h2>
            <FormControl fullWidth>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">Rp.</InputAdornment>
                }
                name="total_pinjaman"
                className="bg-primary"
                required
                value={nominal}
                onChange={handleNominalChange}
                inputProps={{ inputMode: "numeric", pattern: "[0-9,.]*" }}
              />
            </FormControl>
          </div>

          <div className="grid gap-2 pt-6">
            <h2 className={`${styles.heading6} text-center`}>Jangka Waktu</h2>
            <FormControl fullWidth>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment position="end">Bulan</InputAdornment>
                }
                type="number"
                name="total_pinjaman"
                className="bg-primary"
                required
                value={waktu}
                onChange={(e) => setWaktu(e.target.value)}
              />
            </FormControl>
          </div>

          <div className="grid gap-2 pt-6">
            <h2 className={`${styles.heading6} text-center`}>Bunga</h2>
            <FormControl fullWidth>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                type="number"
                name="total_pinjaman"
                className="bg-primary"
                required
                value={bunga}
                onChange={(e) => setBunga(e.target.value)}
              />
            </FormControl>
          </div>

          <div className="pt-6">
            <button
              className="bg-primary rounded-lg py-2 px-8 font-bold "
              type="submit"
            >
              Hitung
            </button>
          </div>
        </form>
      )}

      {showResult && (
        <div className="">
          <h2 className={`${styles.heading3} text-center`}>Hasil Hitung</h2>
          <TableContainer
            component={Paper}
            style={{ border: "1px solid #cbd5e1", boxShadow: "inherit" }}
            className="space-y-2 my-8"
          >
            <Table aria-label="Tabel Hasil Kredit">
              <TableBody>
                {CalcDataFields.map((field, index) => (
                  <TableRow key={index} className={index % 2 && "bg-abuTerang"}>
                    {[field.label, field.value].map((cellmap, index) => (
                      <TableCell
                        key={index}
                        style={{
                          borderBottom: "1px solid #cbd5e1",
                          fontWeight: "bold",
                        }}
                      >
                        {cellmap}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <h2 className={`${styles.heading5} text-center`}>Estimasi Akhir</h2>
          <h2 className={`${styles.heading3} text-center text-biruMuda-500`}>
            {hasilTotal}
          </h2>

          <div className="pt-6">
            <button
              className="bg-primary rounded-lg py-2 px-8 font-bold "
              type="submit"
              onClick={handleShowResult}
            >
              Hitung Ulang
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SimulasiCalcKredit;
