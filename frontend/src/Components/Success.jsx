import React from "react";
import styles from "../data/style";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonOutline } from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const Success = () => {
  return (
    <section className={`${styles.flexCenter} h-screen bg-primary`}>
      <div className="bg-[#d9d9d9] px-32 py-16">
        <div className={`${styles.flexCenter} px-10 py-16`}>
          <div className="bg-biruMuda-500 px-10 py-10 rounded-full relative z-[1] ">
            <CheckIcon sx={{ fontSize: 80 }} className="text-primary" />
          </div>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [1, 0], scale: [1, 2.5] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            className="absolute bg-biruMuda-100 px-20 py-20 rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: [1, 0], scale: [1, 1.75] }}
            transition={{
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            className="absolute bg-biruMuda-300 px-20 py-20 rounded-full"
          ></motion.div>
        </div>

        <div className={`${styles.flexCenter} flex-col text-center`}>
          <h1 className={`${styles.heading1}`}>Berhasil!!</h1>
          <p className="mb-6">Silahkan Konfirmasi Dirimu Ke Nomor Ini</p>
          <ButtonOutline
            ColorText="text-[#12a50b]"
            ColorPrimary="border-[#12a50b]"
            ColorPrimary200="bg-[#a0db9d] "
            ColorPrimary400="bg-[#41b73c] "
            TopShadow="top-2"
            LeftShadow="left-[33px]"
            href={"https://www.instagram.com/"}
            target={"_blank"}
          >
            Whatsapp
          </ButtonOutline>
        </div>
      </div>
    </section>
  );
};

export default Success;
