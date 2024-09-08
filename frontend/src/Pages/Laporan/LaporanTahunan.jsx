import React, { useEffect, useState } from "react";
import IntroBanner from "../../Layouts/IntroBanner";
import { BlueBanner, loaderIcon } from "../../helper";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import styles from "../../helper/style";

const LaporanTahunan = () => {
  const [dataLaporan, setDataLaporan] = useState([]);
  const [filterLaporan, setFilterLaporan] = useState("Tahunan");

  useEffect(() => {
    // Fetch data from API
    fetch("http://localhost:8000/api/laporan")
      .then((response) => response.json())
      .then((data) => {
        // Filter data based on the filterLaporan state
        const filteredData = data
          .filter((laporan) => laporan.jenis_laporan.toLowerCase() === filterLaporan.toLowerCase())
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
          TitleBanner={"Laporan Tahunan"}
          DescriptionBanner={`
            Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
            memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
            dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
            menawarkan berbagai produk kredit yang dapat disesuaikan dengan
            keperluan Anda.
          `}
        />
        <TitleBlueBanner title={"Laporan Tahunan"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} grid md:grid-cols-x3300 justify-center gap-8`}
      >
        {dataLaporan.map((laporan, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img src={loaderIcon} alt="Loading" />
            <h2 className={`${styles.heading5} text-center`}>
              {laporan.tanggal}
            </h2>
            <div className="grid grid-cols-2 gap-4 font-semibold">
              <a
                href={`http://localhost:8000/image/public/laporan/${laporan.file_laporan}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.flexCenter} border-2 border-merahh-500 text-merahh-500 px-2 py-2 rounded-md`}
              >
                Lihat
              </a>
              <a
                href={`http://localhost:8000/laporan/download/${laporan.file_laporan}`}
                download
                className={`${styles.flexCenter} bg-merahh-500 text-primary px-4 py-2 rounded-md`}
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

export default LaporanTahunan;
