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
    fetch(`${localhostLink}/api/promo`)
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
                Tugasnya Dani Sama Gambar Juga yang sebelahnya -->>
            `}
        />
        <TitleBlueBanner title={"Promo"} />
      </section>

      <section
        className={`${styles.paddingY} ${styles.paddingX} flex flex-wrap justify-center gap-8`}
      >
        {promoData.slice(pagination.from, pagination.to).map((promo, index) => (
          <div
            key={index}
            className="w-[300px] p-4 border-2 rounded-md grid gap-2 justify-items-center items-center cursor-pointer"
            onClick={() => navigate(`${promo.slug}`)}
          >
            <div className="w-60 h-60 overflow-hidden">
              <img
                src={`${localhostLink}/image/public/promo/${promo.image}`}
                alt={promo.judul}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className={`${styles.heading6} text-center`}>
              {promo.judul}
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
