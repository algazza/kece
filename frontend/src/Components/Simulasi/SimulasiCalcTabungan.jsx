import {
  FilledInput,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../helper/style";
import { motion } from "framer-motion";

const SimulasiCalcTabungan = () => {
  const [nominal, setNominal] = useState("");
  const [produk, setProduk] = useState();
  const [bunga, setBunga] = useState();
  const [hasilTotal, setHasilTotal] = useState();
  const [hasilBunga, setHasilBunga] = useState();
  const [showResult, setShowResult] = useState(false);
  const [rawNominal, setRawNominal] = useState("");
  const [errNominal, setErrNominal] = useState(false);
  const nominalNumber = parseFloat(nominal.replace(/\./g, ""));

  const CalcDataFields = [
    { label: "Produk Tabungan", value: produk },
    {
      label: "Setoran Awal",
      value: `Rp. ${parseInt(rawNominal).toLocaleString("id-ID")}`,
    },
    { label: "Angka Bunga", value: `${bunga}%` },
    {
      label: "Total",
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

  useEffect(() => {
    if (produk === "Tabungan Pro Aktif") {
      if (nominalNumber >= 20000 && nominalNumber <= 1000000) {
        setBunga(3);
      } else if (nominalNumber > 1000000 && nominalNumber <= 2500000) {
        setBunga(3.5);
      } else if (nominalNumber > 2500000 && nominalNumber <= 5000000) {
        setBunga(4);
      } else if (nominalNumber > 5000000) {
        setBunga(4.5);
      } else {
        setBunga("");
      }
    } else if (produk === "Tabungan Simpel") {
      if (nominalNumber >= 20000) {
        setBunga(2);
      } else {
        setBunga("");
      }
    } else if (produk === "Tabungan Tagar") {
      if (nominalNumber >= 5000000) {
        setBunga(1);
      } else {
        setBunga("");
      }
    } else {
      setBunga("");
    }
  }, [produk, nominalNumber]);

  const handleCalculations = (e) => {
    e.preventDefault();

    if (produk === "Tabungan Pro Aktif" || produk === "Tabungan Simpel") {
      if (!nominal || nominalNumber < 20000) {
        setHasilTotal("Mohon isi semua field");
        setShowResult(false);
        setErrNominal(true);
      } else {
        setErrNominal(false)
        let hasilBungaTotal = 0;

        if (nominalNumber >= 7500000) {
          hasilBungaTotal = ((nominalNumber * (bunga / 100) * 30) / 365) * (0.8 / 100) ;
        } else {
          hasilBungaTotal = (nominalNumber * (bunga / 100) * 30) / 365;
        }

        setHasilTotal(`Rp. ${hasilBungaTotal.toLocaleString("id-ID")}`);
        setHasilBunga(`Rp. ${hasilBungaTotal.toLocaleString("id-ID")}`);
        setShowResult(!showResult);
      }
    } else if (produk === "Tabungan Tagar") {
      if (!nominal || nominalNumber < 5000000) {
        setHasilTotal("Mohon isi semua field");
        setShowResult(false);
        setErrNominal(true);
      } else {
        let hasilBungaTotal =
          (0.8 / 100) * (nominalNumber * (bunga / 100) * 30);
        let hasilPerkalianTotal = nominalNumber + hasilBungaTotal;

        setHasilTotal(`Rp. ${hasilPerkalianTotal.toLocaleString("id-ID")}`);
        setHasilBunga(`Rp. ${hasilBungaTotal.toLocaleString("id-ID")}`);
        setShowResult(!showResult);
      }
    }
  };

  const handleShowResult = () => {
    if (!nominal || !bunga) {
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
            <h2 className={`${styles.heading6} text-center`}>Produk</h2>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                {/* Jangka Waktu */}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="Jangka Waktu"
                className="bg-primary"
                required
                value={produk}
                onChange={(e) => setProduk(e.target.value)}
              >
                {[
                  "Tabungan Pro Aktif",
                  "Tabungan Simpel",
                  "Tabungan Tagar",
                ].map((bulan, index) => (
                  <MenuItem key={index} value={bulan}>
                    {bulan}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

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
                error = {errNominal}
                onChange={handleNominalChange}
                inputProps={{ inputMode: "numeric", pattern: "[0-9,.]*" }}
              />
              {errNominal && <FormHelperText error>Nominal Terlalu Kecil</FormHelperText>}
            </FormControl>
          </div>

          <div className="grid gap-2 pt-6">
            <h2 className={`${styles.heading6} text-center`}>Bunga</h2>
            <FormControl fullWidth>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                type="number"
                name="bunga"
                className="bg-primary"
                disabled
                value={bunga}
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
          <div className="space-y-2 my-8">
            {CalcDataFields.map((field, index) => (
              <div key={index} className="flex sm:items-center">
                <span className="font-bold w-1/3">{field.label}</span>
                <span className="text-base w-2/3 break-words">
                  : {field.value}
                </span>
              </div>
            ))}
          </div>

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

export default SimulasiCalcTabungan;
