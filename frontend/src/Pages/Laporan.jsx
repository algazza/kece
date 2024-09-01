import React, { useEffect, useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner, loaderIcon } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";

const laporandata = [
  {
    judul: "Maret 2024",
    jenis: "Triwulan",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
  {
    judul: "Juni 2024",
    jenis: "Triwulan",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
  {
    judul: "Deseber 2024",
    jenis: "Triwulan",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
  {
    judul: "Tahun 2024",
    jenis: "Tahunan",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
  {
    judul: "GCG 2023",
    jenis: "GCG",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
  {
    judul: "GCG 2024",
    jenis: "GCG",
    file: "/src/img/Pembagian Kelompok MPLS PPLG.pdf",
  },
];
const Laporan = () => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [filterLaporan, setFilterLaporan] = useState("Triwulan");

  // Ambil data dari API
  useEffect(() => {
    fetch("http://localhost:8000/api/laporan")
      .then((response) => response.json())
      .then((data) => {
        // Filter data berdasarkan jenis laporan
        const filteredData = data.filter(
          (lapor) => lapor.jenis_laporan.toLowerCase() === filterLaporan.toLowerCase()
        ).reverse();
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

      <section className="pt-10 flex justify-center">
        <div className="flex gap-4 sm:max-w-full max-w-80 overflow-auto">
          {["Triwulan", "Tahunan", "GCG"].map((category) => (
            <div
              key={category}
              onClick={() => setFilterLaporan(category)}
              className={`border-merahh-500 text-merahh-500 hover:bg-merahh-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                filterLaporan === category ? "bg-merahh-500 text-primary" : ""
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section
        className={`${styles.paddingY} grid md:grid-cols-x3300 justify-center gap-8`}
      >
        {dataLaporan.map((laporan, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img src={loaderIcon} alt="" />
            <h2 className={`${styles.heading5} text-center`}>
              {laporan.tanggal}
            </h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
              <a
                href={`http://localhost:8000/image/public/laporan/${laporan.file_laporan}`}
                target="_blank"
                className={`${styles.flexCenter} border-2 border-merahh-500 text-merahh-500 px-2 py-2 rounded-md`}
              >
                Lihat
              </a>
              <a
                href={`http://localhost:8000/laporan/download/${laporan.file_laporan}`}
                download
                className={`${styles.flexCenter} bg-merahh-500 text-primary px-4 py-2 rounded-md `}
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};



export default Laporan;
