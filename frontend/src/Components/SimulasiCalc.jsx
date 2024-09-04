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
  const [nominal, setNominal] = useState()
  const [waktu, setWaktu] = useState()
  const [bunga, setBunga] = useState()
  const [hasil, setHasil] = useState()

  const handleCalculations = (e) => {
    e.preventDefault()

    if(nominal === 0 || waktu === 0 || bunga === 0){
      setHasil("Mohon isi semua field")
    } else{
      let hasilPerkalian = (nominal * waktu * bunga) / 100
      // setHasil(hasilPerkalian.toLocaleString("id-ID"))
      setHasil(`Rp. ${hasilPerkalian.toLocaleString("id-ID")}`)
    }
  }

  return (
    <form onSubmit={handleCalculations} className="bg-biruMuda-100 rounded-xl p-4">
      <div className="grid gap-2 pt-6">
        <h2 className={`${styles.heading6} text-center`}>Nominal</h2>
        <FormControl fullWidth>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">Rp.</InputAdornment>
            }
            type="number"
            name="total_pinjaman"
            className="bg-primary"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </FormControl>
      </div>

      <div className="grid gap-2 pt-6">
        <h2 className={`${styles.heading6} text-center`}>Jangka Waktu</h2>
        <FormControl fullWidth>
          <OutlinedInput
            id="outlined-adornment-amount"
            endAdornment={<InputAdornment position="end">Bulan</InputAdornment>}
            type="number"
            name="total_pinjaman"
            className="bg-primary"
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

    <h2 className={`${styles.heading3} text-center`}>hasilnya adalah: {hasil}</h2>
    </form>
  );
};

export default SimulasiCalc;
