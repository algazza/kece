import React, { useState } from "react";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "../Components/Group Form/FormBank.jsx";
import { BlueBanner, formUsahaSponsor } from "../helper";
import { SponsorForm } from "../Components/Group Form/Form.jsx";
import { nomorInduk } from "../helper/nomor";
import { localhostLink } from "../helper/localhost";
import styles from "../helper/style.js";
import {
  FormBranding,
  FormSponsor,
} from "../Components/Group Form/FormCooperation.jsx";
import { motion } from "framer-motion";

const KerjaSama = () => {
  const [tabs, setTabs] = useState(0);

  function updateTabs(id) {
    setTabs(id);
  }

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Kerja Sama"}
          DescriptionBanner={`
              Tugas Aldara
            `}
        />
        <TitleBlueBanner title={"Kerja Sama"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className={styles.flexCenter}>
        <div className="pt-10 sm:px-0 px-6 flex gap-4 overflow-auto">
          {["Sponsor", "Branding"].map((menu, index) => (
            <div
              key={index}
              onClick={() => updateTabs(index)}
              className={`border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0 ${
                tabs === index ? "bg-biruMuda-500 text-primary rounded-md" : ""
              }`}
            >
              {menu}
            </div>
          ))}
        </div>
      </section>

      {tabs == 0 && 
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <FormSponsor />
      </motion.div>}

      {tabs == 1 && 
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <FormBranding />
      </motion.div>}

    </>
  );
};

export default KerjaSama;
