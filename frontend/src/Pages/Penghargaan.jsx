import React, { useState, useEffect } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";
import { localhostLink } from "../helper/localhost";

const Penghargaan = () => {
  const [penghargaanData, setPenghargaanData] = useState([]);

  useEffect(() => {
    fetch(`${localhostLink}/api/penghargaan`)
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
            Halaman Penghargaan menampilkan berbagai prestasi yang diraih Bank Arto Moro sebagai pengakuan atas kinerja dan kontribusinya 
            di dunia perbankan. Pengunjung dapat menemukan informasi tentang jenis penghargaan, lembaga pemberi, serta kategori seperti 
            layanan terbaik, inovasi produk, dan tanggung jawab sosial. Penghargaan ini meningkatkan reputasi BPR Arto Moro dan 
            menunjukkan dedikasinya dalam memberikan layanan berkualitas dan berkelanjutan.
          `}
        />
        <TitleBlueBanner title={"Penghargaan"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} flex flex-wrap justify-center gap-8`}
      >
        {penghargaanData.map((award, index) => (
          <div
            key={index}
            className="w-[300px] p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img
              src={`${localhostLink}/image/public/penghargaan/${award.image}`}
              alt={award.nama_penghargaan}
            />
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
