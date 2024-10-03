import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import FormBank from "../../Components/Group Form/FormBank.jsx";
import styles from "../../helper/style";
import { BlueBanner } from "../../helper";
import { motion } from "framer-motion";
import { Deposito } from "../../Components/Group Form/Form.jsx";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { IsiKredit } from "../../helper/DataProduk";
import { nomorInduk } from "../../helper/nomor";
import { localhostLink } from "../../helper/localhost";
import { TabelSimDeposito } from "../../Components/TabelSim";
import { useMenu } from "../../MenuProvider";
import TabelBiaya from "../../Components/TabelBiaya";

// ===================================================
const buttonMenuTabungan = [
  {
    id: 1,
    icon: (className) => (
      <TrendingUpIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Deposito",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
];

const SyaratDeposito = () => {
  const { menu, setMenu } = useMenu();
  const [tabs, setTabs] = useState(1);

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
                Deposito Arto Moro adalah simpanan berjangka dengan bunga hingga 6,75%, lebih tinggi dibandingkan bank umum, dan menawarkan 
                hadiah menarik seperti souvenir, voucher, serta kesempatan liburan ke luar negeri. Dana nasabah dijamin oleh 
                Lembaga Penjamin Simpanan (LPS) hingga Rp 2 miliar per rekening. 
                Menempatkan dana di deposito ini juga berkontribusi pada penyaluran kredit untuk mendukung pertumbuhan ekonomi lokal.
            `}
        />
        <TitleBlueBanner title={"Deposito"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>
      {/* Menu utama */}
      {menu === 0 ? (
        <section
          className={`${styles.paddingY} px-16 flex flex-wrap gap-8 justify-center justify-items-center`}
        >
          {/* menu button */}
          {buttonMenuTabungan.map((menu, index) => (
            <a
              href="#section2"
              className={`bg-abuTerang drop-shadow-lg rounded-lg p-5 w-[300px] flex flex-col items-center align-middle text-center cursor-pointer`}
              key={index}
              onClick={() => updateMenu(menu.id)}
            >
              {menu.icon("m-2 text-blue-400")}
              <h6 className={`${styles.heading6}`}>{menu.title}</h6>
              <p className="mt-4">{menu.deskripsi}</p>
            </a>
          ))}
        </section>
      ) : null}

      {IsiKredit.map((kredit) => {
        return menu === kredit.id ? (
          <section key={kredit.id}>
            {/* Menu pilihan */}
            <section className={styles.flexCenter}>
              <div className="pt-10 sm:px-0 px-6 flex gap-4 overflow-auto">
                {[
                  "Keuntungan",
                  "Syarat & Ketentuan",
                  "Tabel Simulasi",
                  "Biaya",
                  "Hubungi Kami",
                ].map((menu, index) => (
                  <div
                    key={index}
                    onClick={() => updateTabs(index + 1)}
                    className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                      tabs === index + 1
                        ? "bg-biruMuda-500 text-primary rounded-md"
                        : ""
                    }`}
                  >
                    {menu}
                  </div>
                ))}
              </div>
            </section>

            {/* Isi dari Menu */}
            <section className="sm:pb-16 md:p-10 p-4 rounded-lg">
              {/* Syarat */}
              {tabs === 1 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="mx-6 sm:mx-10 sm:px-10 "
                >
                  <div className="text-abuGelap sm:ml-4">
                    <h3 className={`${styles.heading5} text-black`}>
                      Keuntungan
                    </h3>
                    {kredit.Keuntungan}
                  </div>
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
                  <div className="list text-abuGelap sm:ml-4">
                    <h3 className={`${styles.heading5} text-black`}>Syarat</h3>
                    {kredit.Syarat}

                    <h3 className={`${styles.heading5} text-black mt-4`}>
                      Ketentuan
                    </h3>
                    {kredit.Ketentuan}
                  </div>
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
                    Tabel Penempatan Dana
                  </h3>

                  <TabelSimDeposito />
                </motion.div>
              ) : null}

              {/* Tabel */}
              {tabs === 4 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`sm:mx-10 sm:px-10 ${styles.flexCenter}`}
                >
                  <TabelBiaya />
                </motion.div>
              ) : null}

              {/* Form */}
              {tabs === 5 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="sm:mx-10 sm:px-10"
                >
                  <FormBank
                    isiPenting={<Deposito />}
                    value={"deposito"}
                    nomer={nomorInduk}
                    endpoint={`${localhostLink}/api/deposito`}
                  />
                </motion.div>
              ) : null}
            </section>

            {/* Button next prev */}
            <section className="flex justify-center gap-4">
              <a
                href="#section2"
                onClick={() => updateMenu(0)}
                className={`bg-biruMuda-700 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Kembali Menu
              </a>
              <a
                href="#section2"
                onClick={() => prevTab(tabs)}
                className={`${
                  tabs === 1 && "hidden"
                } text-biruMuda-500 border-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Sebelumnya
              </a>
              <a
                href="#section2"
                onClick={() => nextTab(tabs)}
                className={`${
                  tabs === 5 && "hidden"
                } bg-biruMuda-500 text-primary hover:text-biruMuda-500 hover:border-biruMuda-500 hover:bg-primary hover:border-2 duration-500 px-4 py-2 rounded-md font-bold cursor-pointer`}
              >
                Lanjut
              </a>
            </section>
          </section>
        ) : null;
      })}
    </>
  );
};

export default SyaratDeposito;
