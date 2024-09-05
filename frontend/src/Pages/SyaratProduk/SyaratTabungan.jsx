import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import FormBank from "../../Components/FormBank";
import styles from "../../helper/style";
import {  BlueBanner } from "../../helper";
import { motion } from "framer-motion";
import { Kredit } from "../../Components/Form";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IsiKredit } from "../../helper/DataProduk";
import { nomorInduk } from "../../helper/nomor";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MosqueIcon from "@mui/icons-material/Mosque";
import ElderlyIcon from "@mui/icons-material/Elderly";
import GroupsIcon from "@mui/icons-material/Groups";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import TabelComp from "../../Components/TabelComp";
// ===================================================
const buttonMenuTabungan = [
  {
    id: 1,
    icon: (className) => (
      <AccountBalanceIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Umum",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
  {
    id: 2,
    icon: (className) => (
      <AccountBalanceWalletIcon
        className={className}
        sx={{ fontSize: "40px" }}
      />
    ),
    title: "Tabungan ProActive",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 3,
    icon: (className) => (
      <SchoolIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Simpel",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 4,
    icon: (className) => (
      <MosqueIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Umroh (TABUM)",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    icon: (className) => (
      <ElderlyIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Pensiun",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 6,
    icon: (className) => (
      <GroupsIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Arisan",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 7,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "SimpHaTi",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    jenis: "Via online",
  },
  {
    id: 8,
    icon: (className) => (
      <DevicesOtherIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Gemilang",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const SyaratTabungan = () => {
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
          TitleBanner={"Tabungan"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Tabugan"} />
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

                  <TabelComp kredit={kredit.Tabel} />
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
                      value={"Tabungan"}
                      nomer={nomorInduk}
                      endpoint={"http://localhost:8000/api/tabungan"}
                    />
                  </div>
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

export default SyaratTabungan;
// mahes 7 agustus 2024
