import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../helper";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import styles from "../helper/style";
import { localhostLink } from "../helper/localhost";

const Manajemen = () => {
  const [komisaris, setKomisaris] = useState(1);
  const [direksi, setDireksi] = useState(1);
  const [pejabatEx, setPejabatEx] = useState(1);
  const [manajemenMenu, setManajemenMenu] = useState(0);
  const [profileDewanKomisaris, setProfileDewanKomisaris] = useState([]);
  const [profileDewanDireksi, setProfileDewanDireksi] = useState([]);
  const [profilePejabatEx, setProfilePejabatEx] = useState([]);

  useEffect(() => {
    fetch(`${localhostLink}/api/manajemen`)
      .then((response) => response.json())
      .then((data) => {
        setProfileDewanKomisaris(data);
        if (!data.some((profile) => profile.id === 1)) {
          findNextProfileId(1, data, setKomisaris);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch(`${localhostLink}/api/direksi`)
      .then((response) => response.json())
      .then((data) => {
        setProfileDewanDireksi(data);
        if (!data.some((profile) => profile.id === 1)) {
          findNextProfileId(1, data, setDireksi);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));

    fetch(`${localhostLink}/api/pejabat`)
      .then((response) => response.json())
      .then((data) => {
        setProfilePejabatEx(data);
        if (!data.some((profile) => profile.id === 1)) {
          findNextProfileId(1, data, setPejabatEx);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function findNextProfileId(startId, profiles, setProfileImage) {
    const validProfiles = profiles.map((profile) => profile.id);
    const nextId = validProfiles.find((id) => id > startId);

    if (nextId) {
      setProfileImage(nextId);
    } else if (validProfiles.length > 0) {
      setProfileImage(validProfiles[0]);
    }
  }

  function updateProfile(id, type) {
    if (type === "komisaris") {
      const profileExists = profileDewanKomisaris.some(
        (profile) => profile.id === id
      );
      if (profileExists) {
        setKomisaris(id);
      } else {
        findNextProfileId(id, profileDewanKomisaris, setKomisaris);
      }
    } else if (type === "direksi") {
      const profileExists = profileDewanDireksi.some(
        (profile) => profile.id === id
      );
      if (profileExists) {
        setDireksi(id);
      } else {
        findNextProfileId(id, profileDewanDireksi, setDireksi);
      }
    } else if (type === "pejabatex") {
      const profileExists = profilePejabatEx.some(
        (profile) => profile.id === id
      );
      if (profileExists) {
        setPejabatEx(id);
      } else {
        findNextProfileId(id, profilePejabatEx, setPejabatEx);
      }
    }
  }

  function updateManajemenMenu(id) {
    setManajemenMenu(id);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Struktur Organisasi"}
          DescriptionBanner={"Profesional, Unggul, Maju, Jaya"}
        />
        <TitleBlueBanner title={"Organisasi"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className={`${styles.paddingX}`}>

        <div className="flex gap-4 py-8 justify-center">
          {["Dewan Komisaris", "Dewan Direksi"].map(
            (manajemen, index) => (
              <div
                key={index}
                onClick={() => updateManajemenMenu(index)}
                className={`${
                  manajemenMenu === index
                    ? "bg-biruMuda-500 text-primary"
                    : "border-biruMuda-500 text-biruMuda-500 border-2"
                } hover:bg-biruMuda-500 hover:text-primary duration-500 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 `}
              >
                {manajemen}
              </div>
            )
          )}
        </div>

        {manajemenMenu === 0 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {profileDewanKomisaris.map((speech) => {
              return (
                komisaris === speech.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <h2 className={`${styles.heading4}`}>{speech.nama}</h2>
                    <h3 className={`${styles.heading6} font-semibold mb-4`}>
                      {speech.jabatan}
                    </h3>

                    <p className="">{speech.deskripsi}</p>
                  </motion.div>
                )
              );
            })}

            {profileDewanKomisaris.map((img) => {
              return (
                komisaris === img.id && (
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={`${localhostLink}/image/public/manajemen/${img.image}`}
                    className="max-w-[367px]"
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
                    onClick={() => updateProfile(menu.id, "komisaris")}
                  >
                    <div className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden">
                      <img
                        src={`${localhostLink}/image/public/manajemen/${menu.image}`}
                        alt={`foto ${menu.nama}`}
                        className={`${
                          komisaris === menu.id &&
                          "bg-blue-300 transition-all duration-500"
                        }`}
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <h3 className={`${styles.fontBodyBold}`}>{menu.nama}</h3>
                      <p className={`${styles.fontCaption}`}>{menu.jabatan}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {manajemenMenu === 1 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {profileDewanDireksi.map((speech) => {
              return (
                direksi === speech.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className=""
                  >
                    <h2 className={`${styles.heading4}`}>{speech.nama}</h2>
                    <h3 className={`${styles.heading6} font-semibold mb-4`}>
                      {speech.jabatan}
                    </h3>

                    <p className="">{speech.deskripsi}</p>
                  </motion.div>
                )
              );
            })}

            {profileDewanDireksi.map((img) => {
              return (
                direksi === img.id && (
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    src={`${localhostLink}/image/public/direksi/${img.image}`}
                    className="min-w-[360px]"
                    alt=""
                  />
                )
              );
            })}

            <div className="sm:col-span-2 md:col-span-1">
              <div className="grid grid-cols-3 gap-4">
                {profileDewanDireksi.map((menu) => (
                  <motion.div
                    key={menu.id}
                    className="grid justify-items-center cursor-pointer"
                    onClick={() => updateProfile(menu.id, "direksi")}
                  >
                    <div className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden">
                      <img
                        src={`${localhostLink}/image/public/direksi/${menu.image}`}
                        alt={`foto ${menu.nama}`}
                        className={`${
                          direksi === menu.id &&
                          "bg-blue-300 transition-all duration-500"
                        }`}
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <h3 className={`${styles.fontBodyBold}`}>{menu.nama}</h3>
                      <p className={`${styles.fontCaption}`}>{menu.jabatan}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

      </section>

      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h1 className={`${styles.heading4} text-center text-biruMuda-500 mb-8`}>
          Pejabat Eksekutif
        </h1>

        <div className={`${styles.flexCenter} flex-wrap gap-16`}>
          {profilePejabatEx.map((img) => (
            <div key={img.nama} className={`${styles.flexCenter} flex-col`}>
              <div
                key={img.nama}
                className="w-[190px] h-[190px] rounded-full bg-abuGelap overflow-hidden hover:scale-105 duration-300"
              >
                <img
                  src={`${localhostLink}/image/public/pejabat/${img.image}`}
                  alt={`foto ${img.nama}`}
                />
              </div>
              <div className="pt-2 text-center">
                <h3 className={`${styles.heading6}`}>{img.nama}</h3>
                <p className={styles.fontSmall}>{img.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Manajemen;
