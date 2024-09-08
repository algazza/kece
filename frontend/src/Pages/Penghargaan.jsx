import React, { useState, useEffect } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";

const Penghargaan = () => {
  const [penghargaanData, setPenghargaanData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/penghargaan")
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setPenghargaanData(reversedData);
      })
      .catch((error) => {
        console.error("Error fetching awards:", error);
      });
  }, []);

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Penghargaan"}
          DescriptionBanner={`
            Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
            memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
            dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
            menawarkan berbagai produk kredit yang dapat disesuaikan dengan
            keperluan Anda.
          `}
        />
        <TitleBlueBanner title={"Penghargaan"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} grid md:grid-cols-x3300 justify-center gap-8`}
      >
        {penghargaanData.map((award, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img src={`http://localhost:8000/image/public/penghargaan/${award.image}`} alt={award.nama_penghargaan} />
            <h2 className={`${styles.heading6} text-center`}>
              {award.nama_penghargaan}
            </h2>
          </div>
        ))}
      </section>
    </>
  );
};

export default Penghargaan;
