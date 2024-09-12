import React, { useState } from "react";
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
import { rateBungaData } from "../helper";
import { motion } from "framer-motion";

const RateBunga = ({ handleOpenRateBunga }) => {
  const [menuTabel, setMenuTabel] = useState(0);

  const handleMenuTabel = (id) => {
    setMenuTabel(id);
  };

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
        <h3 className={`${styles.heading4} text-center`}>Rate Bunga</h3>

        <div className="my-8 flex flex-col items-center gap-8">
          <div className="relative flex gap-16 text-center">
            {["Kredit", "Deposito"].map((ratemenu, index) => (
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
              Nilai penempatan bunga {menuTabel == 0 ? "kredit" : "deposito"}
            </p>
            <p className="">Update Terakhir: 12 September 2024</p>
          </div>
        </div>

        {menuTabel === 0 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <TableContainer
              component={Paper}
              style={{ border: "1px solid black" }}
            >
              <Table sx={{ width: 420 }} aria-label="tabel rate bunga">
                <TableHead>
                  <TableRow>
                    {["Plafon", " 12 Bulan", "24 Bulan", "36 Bulan"].map(
                      (row, index) => (
                        <TableCell
                          key={index}
                          align="left"
                          style={{ borderBottom: "1px solid black", fontWeight: "bold" }}
                        >
                          {row}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rateBungaData.map((cell, index) => (
                    <TableRow key={index}>
                      {[
                        cell.plafon,
                        cell.satutahun,
                        cell.duatahun,
                        cell.tigatahun,
                      ].map((cellmap, index) => (
                        <TableCell
                          key={index}
                          style={{ borderBottom: "1px solid black" }}
                        >
                          {cellmap.toLocaleString("id-ID")}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
              style={{ border: "1px solid black" }}
            >
              <Table sx={{ minWidth: 500 }} aria-label="tabel rate bunga">
                <TableHead>
                  <TableRow>
                    {["Plafon", " 12 Bulan", "24 Bulan", "36 Bulan"].map(
                      (row, index) => (
                        <TableCell
                          key={index}
                          align={index == 0 ? "center" : "left"}
                          style={{ borderBottom: "1px solid black" }}
                        >
                          {row}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rateBungaData.map((cell, index) => (
                    <TableRow key={index}>
                      {[
                        cell.plafon,
                        cell.satutahun,
                        cell.duatahun,
                        cell.tigatahun,
                      ].map((cellmap, index) => (
                        <TableCell
                          key={index}
                          style={{ borderBottom: "1px solid black" }}
                        >
                          {cellmap.toLocaleString("id-ID")}
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
