import React, { useState } from "react";
import { FormControl, InputLabel, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import styles from "../helper/style";
import ShowerIcon from "@mui/icons-material/Shower";
import BedIcon from "@mui/icons-material/Bed";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";

const IsiArmorProp = () => {
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const { nomer } = location.state || {};

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <section className="grid sm:justify-center md:items-center md:gap-y-4 md:gap-x-20 md:grid-cols-x2440">
        <div className="text-center">
          <h1 className={`${styles.heading3} `}>Gayamsari</h1>
          <p className="">
            Jl. Gempolsari I, Pandean Lamper, Kec. Gayamsari, Kota Semarang,
            Jawa Tengah
          </p>
        </div>

        <div className="m-4 grid gap-2 md:-order-1 md:row-[1/3]">
          <img
            src="https://media.dekoruma.com/dekohouse/property/real-estate/PLMA-JDSR/perumahan-jds-resort-depok-general-fasad-1.jpg?auto=webp&optimize=medium&width=328&format=jpg&fit=bounds&dpr=1.5"
            alt=""
            className=""
          />
          <h2 className={`${styles.heading4}`}>
            Rp. <span>1,2 Miliar</span>
          </h2>

          <div className="flex justify-between text-abuGelap">
            <p>
              LB : <span>20</span>m²
            </p>
            <p>
              LT: <span>30</span>m²
            </p>
            <div>
              <BedIcon /> <span className="ml-2">3</span>
            </div>
            <div>
              <ShowerIcon /> <span className="ml-2">2</span>
            </div>
          </div>

          <div className="border-[1px] border-abuGelap py-4 px-4">
            <div
              className="mt-2 py-2 bg-[#12a50b] text-primary rounded-xl cursor-pointer flex justify-center gap-4"
              onClick={handleModal}
            >
              <WhatsAppIcon /> Whatsapp
            </div>

            <div
              className="mt-2 py-2 bg-[#e1306c] text-primary rounded-xl cursor-pointer flex justify-center gap-4"
              onClick={handleModal}
            >
              <InstagramIcon /> Instagram
            </div>
          </div>
        </div>

        <div className="">
          <h1 className={`${styles.heading4}`}>Deskripsi</h1>

          <div className="">
            📍{" "}
            <span>
              Jl. Gempolsari I, Pandean Lamper, Kec. Gayamsari, Kota Semarang,
              Jawa Tengah
            </span>
            <ul className="list-disc mt-4 list-inside">
              <li>Luas Tanah 149 m²</li>
              <li>Luas Bangunan 90 m²</li>
              <li>Air artetis</li>
              <li>Listrik 1300 watt</li>
              <li>Menghadap selatan</li>
            </ul>
            <p className="mt-4">
              Lokasi Strategis:
              <ul className="list-disc list-inside">
                <li>1 menit ke Rumah Sakit Bhayangkara Semarang</li>
                <li>1 menit ke SPBU Pertamina Lamper</li>
                <li>1 menit ke PT. Piranti Housewares Indo Prima</li>
                <li>2 menit ke Pemancingan Bhakti Galatama</li>
                <li>2 menit ke Pasar Gayamsari</li>
                <li>3 menit ke Spider Futsal Stadium</li>
                <li>4 menit ke Taman Citra Satwa</li>
              </ul>
            </p>
          </div>
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
                    value={nameInputs}
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
                  href={`https://wa.me/+62${nomer}?text=Saya%20${nameInputs}%20dengan%20`}
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
