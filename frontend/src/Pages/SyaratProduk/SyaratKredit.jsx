import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import FormBank from "../../Components/FormBank";
import styles from "../../helper/style";
import { PenempatanDana, BlueBanner } from "../../helper";
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
import { Kredit } from "../../Components/Form";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IsiKredit } from "../helper/DataProduk";
import { nomorInduk } from "../helper/nomor";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWorkRounded";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import ElderlyRoundedIcon from "@mui/icons-material/ElderlyRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MosqueRoundedIcon from "@mui/icons-material/MosqueRounded";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";

// ===================================================
const buttonMenuTabungan = [
  {
    id: 1,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Kredit Investasi",
    deskripsi: "Raih keuntungan maksimal, masa depan gemilang",
    jenis: "Via online",
  },
  {
    id: 2,
    icon: (className) => (
      <LocalAtmIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Kredit Modal",
    deskripsi: " Tambah modal usaha, sukses di tangan Anda",
  },
  {
    id: 3,
    icon: (className) => (
      <MapsHomeWorkIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Kredit KPR",
    deskripsi: "Miliki rumah idaman, proses mudah dan cepat.",
    jenis: "Via online",
  },
  {
    id: 4,
    icon: (className) => (
      <PlaylistAddCheckRoundedIcon
        className={className}
        sx={{ fontSize: "40px" }}
      />
    ),
    title: "Kredit Multiguna",
    deskripsi: "Solusi pinjaman untuk semua kebutuhan Anda",
    jenis: "Via online",
  },
  {
    id: 5,
    icon: (className) => (
      <ElderlyRoundedIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Kredit Pensiun",
    deskripsi: "Nikmati hari tua nyaman dengan finansial aman",
  },
  {
    id: 6,
    icon: (className) => (
      <ShoppingCartRoundedIcon
        className={className}
        sx={{ fontSize: "40px" }}
      />
    ),
    title: "Kredit Konsumtif",
    deskripsi: "Penuhi kebutuhan hidup Anda dengan pinjaman cepat dan mudah",
  },
  {
    id: 7,
    icon: (className) => (
      <MosqueRoundedIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Kredit Pembiayaan Umroh",
    deskripsi: "Rencanakan umroh, jalani ibadah dengan tenang",
  },
  {
    id: 8,
    icon: (className) => (
      <FilterVintageRoundedIcon
        className={className}
        sx={{ fontSize: "40px" }}
      />
    ),
    title: "Kredit Pembiayaan Ziarah",
    deskripsi: "Nikmati ziarah penuh makna dengan biaya terjangkau dan mudah",
    jenis: "Via online",
  },
];

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

const SyaratKredit = () => {
  let amountIndex = 0;
  const [tabs, setTabs] = useState(1);
  const [menu, setMenu] = useState(0);

  // tab
  function updateTabs(id) {
    setTabs(id);
  }
  function nextTab(id) {
    updateTabs(id + 1);
  }
  function prevTab(id) {
    updateTabs(id - 1);
  }

  // menu
  function updateMenu(id) {
    setMenu(id);
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

      {/* Menu utama */}
      {menu === 0 ? (
        <section
          className={`${styles.paddingY} grid md:grid-cols-x3300 gap-8 justify-center justify-items-center`}
        >
          {/* menu button */}
          {buttonMenuTabungan.map((menu, index) => (
            <div
              className={`bg-abuTerang drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center cursor-pointer`}
              key={index}
              onClick={() => updateMenu(menu.id)}
            >
              {menu.icon("m-2 text-blue-400")}
              <h6 className={`${styles.heading6}`}>{menu.title}</h6>
              <p className="mt-4">{menu.deskripsi}</p>
            </div>
          ))}
        </section>
      ) : null}

      {IsiKredit.map((kredit) => {
        return menu === kredit.id ? (
          <section key={kredit.id}>
            {/* Menu pilihan */}
            <section className="pt-10 flex justify-center">
              {["Syarat", "Ketentuan", "Tabel", "Pengajuan"].map(
                (menu, index) => (
                  <div
                    key={index}
                    onClick={() => updateTabs(index + 1)}
                    className={` text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-x-[1px] px-4 py-2 hover:rounded-md font-bold cursor-pointer ${
                      tabs === index + 1
                        ? "bg-biruMuda-500 text-primary rounded-md"
                        : ""
                    }`}
                  >
                    {menu}
                  </div>
                )
              )}
            </section>

            {/* Isi dari Menu */}
            <section className="sm:pb-16 m-8 bg-abuTerang md:p-10 p-4 rounded-lg">
              {/* Syarat */}
              {tabs === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="mx-6 sm:mx-10 sm:px-10 "
                >
                  <ul className="text-abuGelap sm:ml-4">
                    <h3 className={`${styles.heading5} text-black my-5`}>
                      A. Keuntungan
                    </h3>
                    {kredit.Keuntungan}

                    <h3 className={`${styles.heading5} text-black my-5 `}>
                      B. Fitur
                    </h3>

                    {kredit.Fitur}

                    <h3 className={`${styles.heading5} text-black my-5`}>
                      C. Syarat Pembukuan rekening
                    </h3>
                    {kredit.Syarat}
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
                  className="mx-7 md:mx-10 md:px-10"
                >
                  <ul className="text-abuGelap sm:ml-4">
                    <h3 className={`${styles.heading5} text-black my-4`}>
                      D. Ketentuan
                    </h3>
                    {kredit.Ketentuan}
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
                  className="md:mx-10 md:px-10"
                >
                  <h3
                    className={`${styles.heading5} text-black my-4 ml-8 sm:ml-4`}
                  >
                    D. Tabel Penempatan Dana
                  </h3>

                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="data tabel">
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
                        {kredit.Tabel.map((row, index, idx) => {
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
                            <TableRow key={idx}>
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
                  <FormBank
                    isiPenting={<Kredit />}
                    value={"Kredit"}
                    nomer={nomorInduk}
                    endpoint={"http://localhost:8000/api/kredit"}
                  />
                </motion.div>
              ) : null}
            </section>

            {/* Button next prev */}
            <section className="flex justify-center gap-4">
              <div
                onClick={() => updateMenu(0)}
                className={`bg-biruMuda-200 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Kembali Menu
              </div>
              <div
                onClick={() => prevTab(tabs)}
                className={`${
                  tabs === 1 && "hidden"
                } text-biruMuda-500 border-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Sebelumnya
              </div>
              <div
                onClick={() => nextTab(tabs)}
                className={`${
                  tabs === 4 && "hidden"
                } bg-biruMuda-500 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Lanjut
              </div>
            </section>
          </section>
        ) : null;
      })}
    </>
  );
};

export default SyaratKredit;
// mahes 7 agustus 2024
