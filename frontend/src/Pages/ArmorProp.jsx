import React from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import { BlueBanner, nunezimg } from "../helper";
import styles from "../helper/style";

const ArmorProp = () => {
  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Armor Properti"}
          DescriptionBanner={`
                Lorem ipsum Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Armor Properti"} />
      </section>

      <section className={`${styles.paddingY} ${styles.paddingX} `}>
        <h1 className={`${styles.heading1} text-center mb-12`}>Armor Properti</h1>

        <div className="grid grid-cols-4 gap-12">
          <div className=" bg-abuTerang rounded-xl cursor-pointer">
            <img
              src="https://media.dekoruma.com/dekohouse/property/real-estate/PLMA-JDSR/perumahan-jds-resort-depok-general-fasad-1.jpg?auto=webp&optimize=medium&width=328&format=jpg&fit=bounds&dpr=1.5"
              alt=""
              className="object-cover h-full w-full rounded-xl max-h-[220px]"
            />
            <div className="p-2">
              <h6 className={`${styles.heading5}`}>Rp. 2,7 M</h6>
              <p className={`${styles.heading6}`}>Semarang Indah</p>
              <p className="text-abuGelap">Semarang Barat, Semarang</p>
            </div>
            <div
              className="border-abuGelap border-t-[1px] flex gap-2 p-2 font-semibold text-abuGelap"
            >
              <p>
                LB : <span>20</span>m²
              </p>
              <p>
                LT: <span>30</span>m²
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArmorProp;
