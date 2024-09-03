import React from "react";
import IntroBanner from "../Layouts/IntroBanner";
import { awardimg, BlueBanner } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";

const Penghargaan = () => {
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
        {PenghargaanData.map((award, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center"
          >
            <img src={awardimg} alt="" />
            <h2 className={`${styles.heading6} text-center`}>
              Infobank 2022- The Most Outstanding Leader In Rural Bank 2022
            </h2>
          </div>
        ))}
      </section>
    </>
  );
};

export default Penghargaan;
