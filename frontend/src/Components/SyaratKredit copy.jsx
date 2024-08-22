import React, { useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "./FormBank";
import styles from "../helper/style";
import { PenempatanDana, BlueBanner } from "../helper";
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

  function nextTab(id) {
    updateTabs(id + 1);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
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

      <section className="pt-10 flex justify-center">
        <div
          onClick={() => updateTabs(1)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
            tabs === 1 ? "bg-biruMuda-500 text-primary rounded-md" : ""
          }`}
        >
          Syarat
        </div>
        <div
          onClick={() => updateTabs(2)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
            tabs === 2 ? "bg-biruMuda-500 text-primary rounded-md" : ""
          }`}
        >
          Ketentuan
        </div>
        <div
          onClick={() => updateTabs(3)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
            tabs === 3 ? "bg-biruMuda-500 text-primary rounded-md" : ""
          }`}
        >
          Tabel
        </div>
        <div
          onClick={() => updateTabs(4)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
            tabs === 4 ? "bg-biruMuda-500 text-primary rounded-md" : ""
          }`}
        >
          Pengajuan
        </div>
      </section>

      <section className="sm:pb-16 m-8 bg-abuTerang p-10 rounded-lg">
        {/* Syarat */}
        {tabs === 1 ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10 "
          >
            {" "}
            <ul className="text-abuGelap ml-5">
              <h3 className={`${styles.heading5} text-black my-5`}>
                A. Keuntungan
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>
                Proses Cepat, 5 Hari Kerja
                </li> <br />
                <li>
                Syarat Mudah & Fleksibel
                </li> <br />
                <li>
                Aman & Terpecaya
                </li>
              </ul>

              <h3 className={`${styles.heading5} text-black my-5`}>
                B. Fitur
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>
                  Suku bunga kredit kompetitif <b>dibanding </b>bank lainnya
                </li>
                <li>
                Jangka waktu kredit hingga <b> 1 tahun dan bisa diperpanjang</b>
                </li>
                <li>Pinjaman kredit 500 juta hingga 30 Milyar.</li>
                <li>Presentase pembiayaan hingga <b>60% dari nilai jaminan</b>.</li>
                <li>Jaminan: <br />
                  - SHM (Sertifikat Hak Milik) <br />
                  - SHGB (Sertifikat Hak Guna Bangunan) untuk rumah, ruko, rukan, atau tanah kosong untuk dibangun <br />
                  - BPKB Kendaraan (sebagai agunan tambahan)</li>
              </ul>

              <h3 className={`${styles.heading5} text-black my-5 `}>
                C. Syarat
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li>Foto copy <b>identitas</b> calon debitur dan suami/istrinya serta identitas pemilik jaminan dan suami/istri yang masih berlaku, </li>
                <li>Foto copy <b>kartu keluarga</b> calon debitur dan pemilik agunan, </li>
                <li>Foto copy <b>surat nikah</b>,</li>
                <li>Foto copy bukti kepemilikan agunan berupa <b>BPKB beserta STNK dan atau sertifikat tanah beserta PBB terakhir</b>.</li>
                
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
            className="mx-7 sm:mx-10 sm:px-10"
          >
            <ul className="text-abuGelap ml-5">
              <h3 className={`${styles.heading5} text-black my-4`}>
                D. Ketentuan
              </h3>
              <ul className="list-inside list-disc pl-16">
                <li className="p-4">
                Suku bunga 10.25% fix 1 tahun. Bunga floating: tahun berikutnya, Suku bunga LPS BPR + 7%
                </li>
                <li className="p-4">
                Jangka waktu kredit hingga 8 tahun hingga 20 tahun.
                </li>
                <li className="p-4">
                Pembiayaan : Tanah dan Bangunan 80%
                </li>
                <li className="p-4">
                Usia debitur minimal 21 th dan pada saat jatuh tempo kredit / maksimal 1 tahun sebelum pensiun, khusus untuk wiraswasta dan profesional pada saat jatuh tempo kredit usia maksimal 70 th.
                </li>
                <li className="p-4">
                DP mulai 10%
                </li>
                <li className="p-4">
                Bebas biaya provisi untuk take over kredit
                </li>
                <li className="p-4">
                Pelunasan dalam masa fix rate berjalan, dikenakan pinalty
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

      <section className="flex ml-16">
        <div
          onClick={() => nextTab(tabs)}
          className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
            tabs === 1 ? "bg-biruMuda-500 text-primary rounded-md" : ""
          }`}
        >
          next
        </div>
      </section>
    </>
  );
};

// mahes 7 agustus 2024
export default SyaratForm;
