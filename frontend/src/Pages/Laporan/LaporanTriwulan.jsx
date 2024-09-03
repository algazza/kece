import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import { BlueBanner, loaderIcon } from "../../helper";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import styles from "../../helper/style";

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

const LaporanTriwulan = () => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [filterLaporan, setFilterLaporan] = useState("Triwulan");

  useEffect(() => {
    let filteredData = laporandata;

    filteredData = filteredData.filter((news) => news.jenis === filterLaporan);

    setDataLaporan(filteredData);
  }, []);

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Laporan GCG"}
          DescriptionBanner={`
            Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
            memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
            dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
            menawarkan berbagai produk kredit yang dapat disesuaikan dengan
            keperluan Anda.
          `}
        />
        <TitleBlueBanner title={"Laporan GCG"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} grid md:grid-cols-x3300 justify-center gap-8`}
      >
        {dataLaporan.map((laporan, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img src={loaderIcon} alt="" />
            <h2 className={`${styles.heading5} text-center`}>
              {/* {laporan.tanggal} */}
              {laporan.judul}
            </h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
              <a
                // href={`http://localhost:8000/image/public/laporan/${laporan.file_laporan}`}
                target="_blank"
                className={`${styles.flexCenter} border-2 border-merahh-500 text-merahh-500 px-2 py-2 rounded-md`}
              >
                Lihat
              </a>
              <a
                // href={`http://localhost:8000/laporan/download/${laporan.file_laporan}`}
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

export default LaporanTriwulan;
