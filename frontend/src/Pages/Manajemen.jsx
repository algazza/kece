import React, { useState } from "react";
import { motion } from "framer-motion";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner, profileDewanKomisaris } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";

const Manajemen = () => {
  const [profile, setProfile] = useState(1);
  // profile
  function updateProfile(id) {
    setProfile(id);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Struktur Organisasi"}
          DescriptionBanner={"Profesional, Unggul, Maju, Jaya"}
        />
        <TitleBlueBanner title={"Struktur Organisasi"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>
      <section className={`${styles.paddingX} ${styles.paddingY} bg-abuTerang`}>
        <h2 className={`${styles.heading4} text-center text-biruMuda-500`}>
          PROFILE
        </h2>
        <p className="text-center">
          Temukan informasi tentang pimpinan perusahaan BPR Arto Moro dan
          kontribusi mereka dalam memberikan layanan terbaik bagi nasabah kami.
        </p>

        <div className="flex gap-4 py-8 justify-center">
          <div className="border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0">
            Dewan Komisaris
          </div>
          <div className="border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0">
            Direksi
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profileDewanKomisaris.map((speech) => {
            return (
              profile === speech.id && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <h2 className={`${styles.heading4}`}>{speech.name}</h2>
                  <h3 className={`${styles.heading6} font-semibold mb-4`}>
                    {speech.position}
                  </h3>

                  <p className="">{speech.speech}</p>
                </motion.div>
              )
            );
          })}

          {profileDewanKomisaris.map((img) => {
            return (
              profile === img.id && (
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  src={img.image}
                  alt=""
                />
              )
            );
          })}

          <div className="sm:col-span-2 md:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              {profileDewanKomisaris.map((menu) => (
                <motion.div
                  key={menu.id}
                  className="grid justify-items-center cursor-pointer"
                  onClick={() => updateProfile(menu.id)}
                >
                  <div className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden">
                    <img
                      src={menu.image}
                      alt=""
                      className={`${
                        profile === menu.id &&
                        "bg-blue-300 transition-all duration-500"
                      }`}
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <h3 className={`${styles.fontBodyBold}`}>{menu.name}</h3>
                    <p className={`${styles.fontCaption}`}>{menu.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Manajemen;
