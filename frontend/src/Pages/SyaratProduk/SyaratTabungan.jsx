import { useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import FormBank from "../../Components/FormBank";
import styles from "../../helper/style";
import { BlueBanner } from "../../helper";
import { motion } from "framer-motion";
import { Kredit } from "../../Components/Form";
import { IsiKredit } from "../../helper/DataProduk";
import { nomorInduk } from "../../helper/nomor";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { localhostLink } from "../../helper/localhost";
import TabelBiaya from "../../Components/TabelBiaya";
import { useMenu } from "../../MenuProvider";
// ===================================================
const buttonMenuTabungan = [
  {
    id: 1,
    icon: (className) => (
      <AccountBalanceWalletIcon
        className={className}
        sx={{ fontSize: "40px" }}
      />
    ),
    title: "Tabungan Pro Aktif",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    icon: (className) => (
      <AccountBalanceIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Tagar",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
  {
    id: 3,
    icon: (className) => (
      <SchoolIcon className={className} sx={{ fontSize: "40px" }} />
    ),
    title: "Tabungan Simpel",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const SyaratTabungan = () => {
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
          TitleBanner={"Tabungan"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Tabungan"} />
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
              <div className="pt-10 flex gap-4 sm:max-w-full max-w-80 overflow-auto">
                {[
                  "Keuntungan",
                  "Syarat & Ketentuan",
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
            <section className={` sm:pb-16 md:p-10 rounded-lg`}>
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

                    <h2 className={`${styles.heading5} text-black mt-4`}>
                      Ketentuan
                    </h2>
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
                  className={`sm:mx-10 sm:px-10 ${styles.flexCenter}`}
                >
                  <h3
                    className={`${styles.heading5} text-black my-4 ml-8 sm:ml-4`}
                  >
                    Tabel Biaya
                  </h3>
                  <TabelBiaya />
                </motion.div>
              ) : null}

              {/* Form */}
              {tabs === 4 ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="sm:mx-10 sm:px-10"
                >
                  <FormBank
                    isiPenting={<Kredit />}
                    value={"Kredit"}
                    nomer={nomorInduk}
                    endpoint={`${localhostLink}/api/kredit`}
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

export default SyaratTabungan;
// mahes 7 agustus 2024
