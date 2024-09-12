import React, { useEffect, useState } from "react";
import ImageBanner from "../../Layouts/ImageBanner";
import { localhostLink } from "../../helper/localhost";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import styles from "../../helper/style";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BlueBanner } from "../../helper";
import IntroBanner from "../../Layouts/IntroBanner";

const pageSize = 12;

const Promo = () => {
  const [images, setImages] = useState([]);
  const [promoData, setPromoData] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${localhostLink}/api/penghargaan`)
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setPromoData(reversedData);
        setPagination({ ...pagination, count: reversedData.length });
      })
      .catch((error) => {
        console.error("Error fetching promo:", error);
      });
  }, []);

  const handlePageChange = (page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <>
      <section className="">
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Promo"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Promo"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} grid md:grid-cols-x3300 justify-center gap-8`}
      >
        {promoData.slice(pagination.from, pagination.to).map((promo, index) => (
          <div
            key={index}
            className="p-4 border-2 rounded-md grid gap-2 justify-center cursor-pointer"
            onClick={() => navigate(`/promo/${promo.id}`)}
          >
            <div className="w-60 h-60 overflow-hidden">
              <img
                src={`${localhostLink}/image/public/penghargaan/${promo.image}`}
                alt={promo.nama_penghargaan}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className={`${styles.heading6} text-center`}>
              {promo.nama_penghargaan}
            </h2>
          </div>
        ))}
      </section>

      <section className={`${styles.flexCenter} py-12`}>
        <Pagination
          count={Math.ceil(pagination.count / pageSize)}
          page={Math.ceil(pagination.from / pageSize) + 1}
          onChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default Promo;
