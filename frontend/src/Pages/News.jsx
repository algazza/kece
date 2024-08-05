import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import { sample } from "../data";

const News = () => {
  return (
    <>
      <Header />
      <section className="">
        <IntroBanner
          TitleBanner="Berita"
          DescriptionBanner="Daparkan informasi secara tepat, cepat dan terpercaya mengenai BPR Arto Moro"
          ImageBanner={sample}
        />
      </section>
      <Footer />
    </>
  );
};

export default News;
