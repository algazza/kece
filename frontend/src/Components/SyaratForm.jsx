import React, { useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "./FormBank";
import styles from "../data/style";
import { PenempatanDana, sample } from "../data";
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
import { Kredit } from "./Form";

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

const SyaratForm = () => {
  let amountIndex = 0;
  const [tabs, setTabs] = useState(1);

  function updateTabs(id) {
    setTabs(id);
  }

  return (
    <main>
      <section>
        <IntroBanner
          ImageBanner={sample}
          TitleBanner={"Kredit"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Kredit"} />
      </section>

      <section className={`${styles.paddingY} flex justify-center`}>
        <div
          onClick={() => updateTabs(1)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${tabs === 1 ? "bg-biruMuda-500 text-primary rounded-md" : ""}`}
        >
          Syarat
        </div>
        <div
          onClick={() => updateTabs(2)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${tabs === 2 ? "bg-biruMuda-500 text-primary rounded-md" : ""}`}
        >
          Ketentuan
        </div>
        <div
          onClick={() => updateTabs(3)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${tabs === 3 ? "bg-biruMuda-500 text-primary rounded-md" : ""}`}
        >
          Tabel
        </div>
        <div
          onClick={() => updateTabs(4)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${tabs === 4 ? "bg-biruMuda-500 text-primary rounded-md" : ""}`}
        >
          Pengajuan
        </div>
      </section>

      <section className="sm:pb-16 pb-6">
        {/* Syarat */}
        {tabs === 1 ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10"
          >
            {" "}
            <ul className="text-abuGelap ml-5">
              <h3 className={`${styles.heading5} text-black my-4`}>
                A. Syarat Pembukuan rekening
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>Perorangan</li>
                <li>Perusahaan</li>
              </ul>

              <h3 className={`${styles.heading5} text-black my-4`}>
                B. Keuntungan
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>
                  Berhak memilih jenis hadiah yang telah disediakan (Umroh,
                  Mobil, Motor Sport, Gadget).
                </li>
                <li>
                  Jenis hadiah yang dipilih sesuai dengan jumlah dana dan lama
                  dana ditempatkan.
                </li>
                <li>Hadiah dipilih, dibawa pulang, langsung, tanpa diundi.</li>
              </ul>

              <h3 className={`${styles.heading5} text-black my-4`}>C. Fitur</h3>
              <ul className="list-inside list-disc pl-16">
                <li>Setoran Awal & Akhir </li>
                <li>Biaya Administrasi Bulanan</li>
                <li>Bunga tabungan</li>
              </ul>
            </ul>
          </motion.div>
        ) : null}

        {/* Ketentuan */}
        {tabs === 2 ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10"
          >
            <ul className="text-abuGelap ml-5">
              <h3 className={`${styles.heading5} text-black my-4`}>
                D. Ketentuan
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>
                  Bunga dihitung dan dibayarkan pada akhir bulan dengan cara
                  ditambahbukukan pada rekening tabungan.
                </li>
                <li>
                  Sebagai bukti transaksi tabungan, bank akan menerbitkan
                  sertipikat tabungan berjangka dan menatausahakan rekening atas
                  nama penabung.
                </li>
                <li>
                  Jika terjadi penarikan tabungan sebelum jatuh tempo maka
                  penabung akan dikenakan pinalti sebesar hadiah yang diterima
                  di awal (nilai hadiah pada saat diterima).
                </li>
                <li>
                  Jika hadiah yang dikehendaki nasabah sudah tidak tersedia di
                  pasaran, maka hadiah akan diganti dengan hadiah lain yang
                  setara atas persetujuan nasabah.
                </li>
                <li>
                  Jika penabung meninggal dunia maka saldo tabungan akan
                  dibayarkan kepada ahli warisnya sesuai ketentuan di BPR Arto
                  Moro.
                </li>
              </ul>
            </ul>
          </motion.div>
        ) : null}

        {/* Tabel */}
        {tabs === 3 ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10"
          >
            <h3 className={`${styles.heading5} text-black my-4 ml-5`}>
              D. Tabel Penempatan Dana
            </h3>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow className="bg-biruMuda-400">
                    <TableCell
                      align="center"
                      style={{ border: "1px solid black" }}
                    >
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
                  {PenempatanDana.map((row, index) => {
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
                        style={{ border: "1px solid black" }}
                      >
                        {row.amount.toLocaleString("id-ID")}
                      </TableCell>
                    ) : null;

                    if (shouldRenderAmountCell) {
                      amountIndex += 1;
                    }

                    return (
                      <TableRow key={index}>
                        <TableCell
                          align="center"
                          style={{ border: "1px solid black" }}
                        >
                          {index + 1}
                        </TableCell>
                        {amountCell}
                        <TableCell style={{ border: "1px solid black" }}>
                          {row.term}
                        </TableCell>
                        <TableCell style={{ border: "1px solid black" }}>
                          {row.reward.toLocaleString("id-ID")}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>
        ) : null}

        {/* Form */}
        {tabs === 4 ? (
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="mx-6 sm:mx-10 sm:px-10"
          >
            <div className={`${styles.flexCenter}`}>
              <FormBank
                isiPenting={<Kredit />}
                value={"Kredit"}
                endpoint={"http://localhost:8000/api/kredit"}
              />
            </div>
          </motion.div>
        ) : null}
      </section>
    </main>
  );
};

export default SyaratForm;
