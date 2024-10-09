import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import styles from "../helper/style";
import ShowerIcon from "@mui/icons-material/Shower";
import BedIcon from "@mui/icons-material/Bed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import { localhostLink } from "../helper/localhost";
import { toast } from "react-toastify";
import Error from "./Error";
import { motion } from "framer-motion";
import { loaderIcon } from "../helper";
import { nomorArmor } from "../helper/nomor";

const IsiArmorProp = () => {
  const { slug } = useParams();
  const [armor, setArmor] = useState(null)
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [nameUser, setNameUser] = useState("");
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    fetch(`${localhostLink}/api/armor/${slug}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
          return Promise.reject("Halaman tidak ditemukan.");
        }
        if (!response.ok) {
          return Promise.reject(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setArmor(data);
        } catch (error) {
          setError("Data tidak dalam format JSON.");
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        setError(error);
        console.error("Error fetching promo details:", error);
      });
  }, [slug]);
  

  if (notFound) {
    return <Error message="Halaman tidak ditemukan" status={404} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!armor)
    return (
      <div className="w-screen h-dvh flex justify-center items-center">
        <div className="">
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
            src={loaderIcon}
            alt=""
          />

          <h1 className={`${styles.heading1}`}>Loading...</h1>
        </div>
      </div>
    );

  return (
    <>
      <section className="grid sm:justify-center md:items-center md:gap-y-2 md:gap-x-20 md:grid-cols-x2440">
        <div className="text-center">
          <h1 className={styles.heading3}>{armor.alamat}</h1>
          <p className="">{armor.alamat_lengkap}</p>
        </div>

        <div className="m-4 grid justify-center gap-2 md:-order-1 md:row-[1/3]">
          <img
            src={`${localhostLink}/image/public/armor/${armor.image}`}
            alt={armor.alamat}
            className="shadow-[0px_5px_20px_0px_#00000024]"
          />
          <h2 className={`${styles.heading4} text-start`}>
            Rp. <span>{armor.harga}</span>
          </h2>

          <div className="flex justify-between text-abuGelap">
            <p>
              LB : <span>{armor.luas_bangunan}</span>m²
            </p>
            <p>
              LT: <span>{armor.luas_tanah}</span>m²
            </p>
            <div>
              <BedIcon /> <span className="ml-2">{armor.bed}</span>
            </div>
            <div>
              <ShowerIcon /> <span className="ml-2">{armor.shower}</span>
            </div>
          </div>

          <div className="border-[1px] border-abuGelap py-4 px-4">
            <div
              className="mt-2 py-2 bg-[#12a50b] text-primary rounded-xl cursor-pointer flex justify-center gap-4"
              onClick={handleModal}
            >
              <WhatsAppIcon /> Whatsapp
            </div>

            <a
              className="mt-2 py-2 bg-[#e1306c] text-primary rounded-xl cursor-pointer flex justify-center gap-4"
              href={armor.instagram}
              target="_blank"
            >
              <InstagramIcon /> Instagram
            </a>
          </div>
        </div>

        <div className="p-4 md:p-0">
          <h1 className={`${styles.heading4}`}>Deskripsi</h1>

          <div
              className="pb-6"
              dangerouslySetInnerHTML={{ __html: armor.deskripsi }}
            />
        </div>

        {openModal && (
          <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed">
            <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed bg-gray-900/50">
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/4 bg-primary p-12 grid gap-4">
                <div
                  className="absolute right-2 top-2 cursor-pointer"
                  onClick={handleModal}
                >
                  <CloseIcon />
                </div>
                <h2 className={`${styles.heading4}`}>
                  Konsultasi Properti Impianmu Dengan Kami
                </h2>
                <FormControl fullWidth className="grid gap-4">
                  <TextField
                    id="outlined-basic"
                    label="Nama Lengkap"
                    type="text"
                    name="nama"
                    variant="outlined"
                    className="rounded-md outline-none"
                    value={nameUser}
                    onChange={(e) => setNameUser(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="No. Telpon"
                    type="number"
                    name="nomor"
                    variant="outlined"
                    className="rounded-md outline-none"
                  />
                </FormControl>
                <a
                  href={`https://wa.me/+62${nomorArmor}?text=Saya%20${nameUser}%20dengan%20url%20${currentUrl}`}
                  className="text-center py-2 bg-biruMuda-500 text-primary rounded-xl"
                >
                  Ajukan!
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default IsiArmorProp;
