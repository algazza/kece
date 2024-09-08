import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../helper/style";

const SimulasiCalc = () => {
  const [nominal, setNominal] = useState('');
  const [waktu, setWaktu] = useState();
  const [bunga, setBunga] = useState();
  const [hasilTotal, setHasilTotal] = useState();
  const [hasilBunga, setHasilBunga] = useState();
  const [showResult, setShowResult] = useState(false);
const [rawNominal, setRawNominal] = useState('')


  // Fungsi untuk memformat angka menjadi format uang Indonesia
  const formatRupiah = (value) => {
    const numberString = value.replace(/[^,\d]/g, ""); // Menghapus semua karakter kecuali angka
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

  // Fungsi untuk menangani perubahan input dan langsung memformat inputan menjadi Rupiah
  const handleNominalChange = (e) => {
    const rawValue = e.target.value.replace(/\./g, ""); // Hapus titik dari input untuk raw value
    setRawNominal(rawValue); // Set raw value untuk perhitungan

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
      let hasilBungaTotal = (nominalNumber * bungaNumber) / waktuNumber;
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
    <div className="bg-biruMuda-200 rounded-xl p-4">
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
                onChange={
                  handleNominalChange
                }
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

          <ul>
            <li>
              Setoran Awal Rp. {parseInt(rawNominal).toLocaleString("id-ID")}
            </li>
            <li>Angka Bunga {bunga}%</li>
            <li>Nilai Bunga {hasilBunga}</li>
            <li>
              {parseInt(rawNominal).toLocaleString("id-ID")} + {hasilBunga}
            </li>
          </ul>

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
    </div>
  );
};

export default SimulasiCalc;
