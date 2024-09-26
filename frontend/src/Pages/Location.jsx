import React, { useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner, jadwalData, locationDescription } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";
import { motion } from "framer-motion";

const Location = () => {
  const [tabs, setTabs] = useState(0);

  function updateTabs(id) {
    setTabs(id);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Lokasi"}
          DescriptionBanner={
            <ul className="list-disc list-inside">
              <h2 className="font-bold text-merahh-500">Kantor Pusat:</h2>
              <li>Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang</li>
              <h2 className="font-bold text-biruMuda-500 mt-4">Kantor Kas:</h2>
              <li>Jl. Gajah Raya No. 155, Semarang</li>
              <li>Jl. Untung Suropati No. 18 Kav.5, Kalipancur, Semarang</li>
              <li>Jl. Kol.H.Imam Suprapto No.1 Bulusan, Tembalang, Semarang</li>
            </ul>
          }
        />
        <TitleBlueBanner title={"Lokasi"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className={styles.flexCenter}>
        <div className="my-10 flex gap-4 sm:max-w-full max-w-80 overflow-auto">
          {["Kantor Pusat", "Kas Gajah", "Kas Kalipancur", "Kas Bulusan"].map(
            (menu, index) => (
              <div
                key={index}
                onClick={() => updateTabs(index)}
                className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                  tabs === index
                    ? "bg-biruMuda-500 text-primary rounded-md"
                    : ""
                }`}
              >
                {menu}
              </div>
            )
          )}
        </div>
      </section>

      <section className="flex justify-center">
        {locationDescription.map((location, index) => {
          return (
            tabs === index && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="md:min-w-[1100px] bg-abuTerang flex flex-col-reverse md:flex-row rounded-lg"
              >
                <div className="md:w-1/2 md:m-12 m-8">
                  <div className="mb-8">
                    <h2 className={`${styles.heading5}`}>{location.kantor}</h2>
                    <p className={`${styles.fontBody} flex-auto my-2`}>
                      {location.alamat}
                    </p>
                    <p className={`${styles.fontBody} flex-auto`}>
                      {location.nomor}
                    </p>
                  </div>

                  {jadwalData.map((scedul, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center my-2"
                    >
                      <span className="font-bold w-1/3">{scedul.hari}:</span>
                      <span className="w-2/3">{scedul.jam}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full">
                  <iframe
                    className="rounded-lg w-full h-full"
                    src={location.gmaps}
                    style={{ marginRight: 3 + "em" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            )
          );
        })}
      </section>
    </>
  );
};

export default Location;
