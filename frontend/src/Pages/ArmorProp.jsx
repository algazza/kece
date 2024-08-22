import React from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import { BlueBanner } from "../helper";

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
    </>
  );
};

export default ArmorProp;
