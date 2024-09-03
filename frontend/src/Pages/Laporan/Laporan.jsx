import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import { BlueBanner, loaderIcon, logoArmor } from "../../helper";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import styles from "../../helper/style";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// ===================================================
const buttonMenuProfile = [
  {
    id: 1,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Laporan Triwulan",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
    href: "laporan-triwulan",
  },
  {
    id: 2,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Laporan GCG",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    href: "laporan-gcg",
  },
  {
    id: 3,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Laporan Tahunan",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
    href: "laporan-tahunan",
  },
];

const Laporan = () => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [filterLaporan, setFilterLaporan] = useState("Triwulan");

  useEffect(() => {
    fetch("http://localhost:8000/api/laporan")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data
          .filter(
            (lapor) =>
              lapor.jenis_laporan.toLowerCase() === filterLaporan.toLowerCase()
          )
          .reverse();
        setDataLaporan(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching laporan data:", error);
      });
  }, [filterLaporan]);

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Laporan"}
          DescriptionBanner={`
            Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
            memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
            dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
            menawarkan berbagai produk kredit yang dapat disesuaikan dengan
            keperluan Anda.
          `}
        />
        <TitleBlueBanner title={"Laporan"} />
      </section>

      <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
        <div className="md:flex gap-40 px-4 md:px-12 sm:pb-12 relative">
          <div className="">
            <h1 className={`${styles.heading4} mb-8`}>Laporan</h1>
            <p className="text-abuGelap">
              Good Corporate Governance (GCG) adalah Tatakelola perusahaan yang
              baik dengan tetap memperhatikan kepentingan pemilik, kreditor,
              pemasok, asosiasi usaha, karyawan, pelanggan, pemerintah dan
              masyarakat luas, berlandaskan peraturan dan nilai etika.
            </p>
          </div>
          <img
            src={logoArmor}
            alt=""
            className="left-1/2 top-[20%] max-md:-translate-x-1/2 opacity-10 md:opacity-100 max-md:absolute w-[280px] h-[280px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-x3300 justify-center justify-items-center gap-8">
          {buttonMenuProfile.map((menu, index) => (
            <a
              className={`bg-abuTerang drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center`}
              key={index}
              href={menu.href}
            >
              {menu.icon("m-2 text-blue-400")}
              <h6 className={`${styles.heading6}`}>{menu.title}</h6>
              <p className="mt-4">{menu.deskripsi}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Laporan;
