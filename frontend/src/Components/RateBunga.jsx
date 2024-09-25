import React, { useEffect, useState } from "react";
import styles from "../helper/style";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { motion } from "framer-motion";
import { localhostLink } from "../helper/localhost";

const RateBunga = ({ handleOpenRateBunga }) => {
  const [menuTabel, setMenuTabel] = useState(0);
  const [rateKredit, setRateKredit] = useState([]);
  const [rateDeposito, setRateDeposito] = useState([]);

  useEffect(() => {
    fetch(`${localhostLink}/api/ratedKredit`)
      .then((response) => response.json())
      .then((data) => setRateKredit(data))
      .catch((error) => {
        console.error("error fetching rate bunga kredit:", error);
      });

    fetch(`${localhostLink}/api/ratedDeposito`)
      .then((response) => response.json())
      .then((data) => setRateDeposito(data))
      .catch((error) => {
        console.error("error fetching rate bunga deposito:", error);
      });
  }, []);

  const handleMenuTabel = (id) => {
    setMenuTabel(id);
  };

  const depositoSukuBunga = [
    {
      bulan: "1 bulan",
      bunga: "5.75%",
    },
    {
      bulan: "3 bulan",
      bunga: "6%",
    },
    {
      bulan: "6 bulan",
      bunga: "6.25%",
    },
    {
      bulan: "12 bulan",
      bunga: "6.5%",
    },
  ];

  const tabunganProAktif = [
    {
      nominal: "20.000 - 1.000.000",
      bunga: "3%",
    },
    {
      nominal: "1.000.001 - 2.500.000",
      bunga: "3.5%",
    },
    {
      nominal: "2.500.001 - 5.000.000",
      bunga: "4%",
    },
    {
      nominal: "> 5.000.000",
      bunga: "4.5%",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => handleOpenRateBunga()}
      className={`${styles.flexJusEnd} fixed inset-0 z-[999] bg-gray-900/50 backdrop-blur-sm`}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-primary p-8 h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cursor-pointer" onClick={() => handleOpenRateBunga()}>
          <ArrowBackIosIcon />
        </div>
        <h3 className={`${styles.heading4} text-center`}>Suku Bunga</h3>

        <div className="my-8 flex flex-col items-center gap-8">
          <div className="relative flex gap-16 text-center">
            {["Tabungan", "Deposito"].map((ratemenu, index) => (
              <div
                key={index}
                className={`${styles.heading6} cursor-pointer`}
                onClick={() => handleMenuTabel(index)}
              >
                {ratemenu}
              </div>
            ))}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-300 rounded-full">
              <div
                className={`h-full bg-merahh-500 rounded-full w-1/2 ${
                  menuTabel == 1 && "ml-auto"
                }`}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="">
              Nilai penempatan bunga {menuTabel == 0 ? "tabungan" : "deposito"}
            </p>
            <p className="">
              Update Terakhir: 12 September 2024
              {/* {rateKredit && rateKredit.updated_at
                ? new Intl.DateTimeFormat("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(rateKredit.updated_at))
                : rateDeposito && rateDeposito.updated_at
                ? new Intl.DateTimeFormat("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(rateDeposito.updated_at))
                : "Tanggal tidak tersedia"} */}
            </p>
          </div>
        </div>

        {menuTabel === 0 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="my-4">
              <h2 className={`${styles.heading5} text-center mb-2`}>
                Tabungan Pro Aktif
              </h2>
              <TableContainer
                component={Paper}
                style={{ border: "1px solid #cbd5e1" }}
              >
                <Table sx={{ width: 420 }} aria-label="tabel rate bunga">
                  <TableHead>
                    <TableRow className="bg-abuTerang">
                      {["Nominal", "Suku Bunga"].map((row, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          style={{ borderBottom: "1px solid #cbd5e1" }}
                        >
                          {row}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {tabunganProAktif.map((cell, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 && "bg-abuTerang"}
                      >
                        {[cell.nominal, cell.bunga].map((cellmap, index) => (
                          <TableCell
                            key={index}
                            style={{ borderBottom: "1px solid #cbd5e1" }}
                          >
                            {cellmap}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="my-4">
              <h2 className={`${styles.heading5} text-center mb-2`}>
                Tabungan Tagar
              </h2>
              <TableContainer
                component={Paper}
                style={{ border: "1px solid #cbd5e1" }}
              >
                <Table sx={{ width: 420 }} aria-label="tabel rate bunga">
                  <TableHead>
                    <TableRow className="bg-abuTerang">
                      {["Nominal", "Suku Bunga"].map((row, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          style={{ borderBottom: "1px solid #cbd5e1" }}
                        >
                          {row}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                      <TableRow>
                        {["> 5.000.000", "1%"].map((cellmap, index) => (
                          <TableCell
                            key={index}
                            style={{ borderBottom: "1px solid #cbd5e1" }}
                          >
                            {cellmap}
                          </TableCell>
                        ))}
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="my-4">
              <h2 className={`${styles.heading5} text-center mb-2`}>
                Tabungan Simpel
              </h2>
              <TableContainer
                component={Paper}
                style={{ border: "1px solid #cbd5e1" }}
              >
                <Table sx={{ width: 420 }} aria-label="tabel rate bunga">
                  <TableHead>
                    <TableRow className="bg-abuTerang">
                      {["Nominal", "Suku Bunga"].map((row, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          style={{ borderBottom: "1px solid #cbd5e1" }}
                        >
                          {row}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                      <TableRow>
                        {["> 20.000", "2%"].map((cellmap, index) => (
                          <TableCell
                            key={index}
                            style={{ borderBottom: "1px solid #cbd5e1" }}
                          >
                            {cellmap}
                          </TableCell>
                        ))}
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </motion.div>
        )}

        {menuTabel === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TableContainer
              component={Paper}
              style={{ border: "1px solid #cbd5e1" }}
            >
              <Table sx={{ width: 420 }} aria-label="tabel rate bunga">
                <TableHead>
                  <TableRow className="bg-abuTerang">
                    {["Jangka Waktu", "Suku Bunga"].map((row, index) => (
                      <TableCell
                        key={index}
                        align="left"
                        style={{ borderBottom: "1px solid #cbd5e1" }}
                      >
                        {row}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {depositoSukuBunga.map((cell, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 && "bg-abuTerang"}
                    >
                      {[cell.bulan, cell.bunga].map((cellmap, index) => (
                        <TableCell
                          key={index}
                          style={{ borderBottom: "1px solid #cbd5e1" }}
                        >
                          {cellmap}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RateBunga;
