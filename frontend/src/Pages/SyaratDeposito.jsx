import React, { useEffect, useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "../Components/FormBank";
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
import { Deposito } from "../Components/Form";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IsiKredit } from "../helper/DataProduk";
import { nomorDeposito } from "../helper/nomor";

// ===================================================
const buttonMenuTabungan = [
  {
    id: 1,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Investasi",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    jenis: "Via online",
  },
  {
    id: 2,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Modal",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit KPR",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 4,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Multiguna",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 5,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pensiun",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
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

const SyaratDeposito = () => {
  let amountIndex = 0;
  const [tabs, setTabs] = useState(1);
  const [menu, setMenu] = useState(0);
  const [viaOnline, setViaOnline] = useState("Datang ke Bank");
  const [menuProduk, setMenuProduk] = useState([]);

  // online
  useEffect(() => {
    let selctedMenu = buttonMenuTabungan;

    if (viaOnline !== "Datang ke Bank") {
      selctedMenu = selctedMenu.filter((item) => item.jenis === viaOnline);
    }
    setMenuProduk(selctedMenu);
  }, [viaOnline, buttonMenuTabungan]);

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
          TitleBanner={"Deposito"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Deposito"} />
      </section>

      {/* Menu utama */}
      {menu === 0 ? (
        <section className="">
          {/* filter button  click */}
          <div className=" flex gap-3 justify-center m-10">
            {["Datang ke Bank", "Via online"].map((online) => (
              <div
                key={online}
                onClick={() => setViaOnline(online)}
                className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                  viaOnline === online ? "bg-biruMuda-500 text-primary" : ""
                }`}
              >
                {online}
              </div>
            ))}
          </div>

          {/* menu button */}
          <div className="grid md:grid-cols-3 gap-8 justify-center justify-items-center">
            {menuProduk.map((menu, index) => (
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
          </div>
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
                    isiPenting={<Deposito />}
                    value={"Deposito"}
                    nomer={nomorDeposito}
                    endpoint={"http://localhost:8000/api/deposito"}
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
                prev
              </div>
              <div
                onClick={() => nextTab(tabs)}
                className={`${
                  tabs === 4 && "hidden"
                } bg-biruMuda-500 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                next
              </div>
            </section>
          </section>
        ) : null;
      })}
    </>
  );
};

export default SyaratDeposito;
