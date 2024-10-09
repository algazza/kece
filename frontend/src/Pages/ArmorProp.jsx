import { useEffect, useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import { Armordata, BlueBanner } from "../helper";
import styles from "../helper/style";
import { useNavigate } from "react-router-dom";
import { localhostLink } from "../helper/localhost";
import { Pagination } from "@mui/material";

const pageSize = 12;

const ArmorProp = () => {
  const [armorData, setArmorData] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${localhostLink}/api/armor`)
      .then((response) => response.json())
      .then((data) => {
        const reversedData = data.reverse();
        setArmorData(reversedData);
        setPagination({ ...pagination, count: reversedData.length });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  
  const handlePageChange = (page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };


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
        <h1 className={`${styles.heading1} text-center mb-12`}>
          Armor Properti
        </h1>

        <div className="grid grid-cols-4 gap-12">
          {armorData.slice(pagination.from, pagination.to).map((armor) => (
            <div
              key={armor.alamat}
              className="bg-abuTerang rounded-xl cursor-pointer"
              onClick={() => navigate(`${armor.slug}`)}
            >
              <img
                src={`${localhostLink}/image/public/armor/${armor.image}`}
                alt={armor.alamat}
                className="object-cover h-full w-full rounded-xl max-h-[220px]"
              />
              <div className="p-2">
                <h6 className={`${styles.heading5}`}>Rp. {armor.harga}</h6>
                <p className={`${styles.heading6}`}>{armor.alamat}</p>
                <p className="text-abuGelap">{armor.kecamatan}</p>
              </div>
              <div className="border-abuGelap border-t-[1px] flex gap-2 p-2 font-semibold text-abuGelap">
                <p>
                  LB : <span>{armor.luas_bangunan}</span>m²
                </p>
                <p>
                  LT: <span>{armor.luas_tanah}</span>m²
                </p>
              </div>
            </div>
          ))}
        </div>
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

export default ArmorProp;
