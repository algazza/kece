import React, { useState } from "react";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../helper";
import styles from "../helper/style";
import { motion } from "framer-motion";

const MobilKas = () => {
  const [tabs, setTabs] = useState(0);

  function updateTabs(id) {
    setTabs(id);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Mobil Kas"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Mobil Kas"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className={styles.flexCenter}>
        <div className="pt-10 flex gap-4 sm:max-w-full max-w-80 overflow-auto">
          {["Keuntungan", "Syarat & Ketentuan", "Biaya", "Hubungi Kami"].map(
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

      <section className={`sm:pb-16 md:p-10 rounded-lg`}>
        {tabs === 0 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10 "
          >
            <div className="text-abuGelap sm:ml-4">
              <h3 className={`${styles.heading5} text-black`}>Keuntungan</h3>
            </div>
          </motion.div>
        )}

        {tabs === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10 "
          >
            <div className="text-abuGelap sm:ml-4">
              <h3 className={`${styles.heading5} text-black`}>Syarat & Ketentuan</h3>
            </div>
          </motion.div>
        )}

        {tabs === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10 "
          >
            <div className="text-abuGelap sm:ml-4">
              <h3 className={`${styles.heading5} text-black`}>Biaya</h3>
            </div>
          </motion.div>
        )}

        {tabs === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mx-6 sm:mx-10 sm:px-10 "
          >
            <div className="text-abuGelap sm:ml-4">
              <h3 className={`${styles.heading5} text-black`}>Hubungi Kami</h3>
            </div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default MobilKas;
