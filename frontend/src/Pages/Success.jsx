import React from "react";
import styles from "../helper/style";
import CheckIcon from "@mui/icons-material/Check";
import { ButtonOutline } from "../Components/Button";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { nameInputs, code, value, nomer } = location.state || {};

  return (
    <>
      {nameInputs ? (
        <section className={`${styles.flexCenter} h-screen bg-primary`}>
          <div className=" px-32 py-16">
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
              <h2 className={`${styles.heading4} text-biruMuda-500`}>
                {nameInputs}
              </h2>
              <p className="mb-6">Silahkan Konfirmasi Dirimu Ke Nomor Ini</p>
              <p className="">code: {code}</p>
              <ButtonOutline
                ColorText="text-[#12a50b]"
                ColorPrimary="border-[#12a50b]"
                ColorPrimary200="bg-[#a0db9d] "
                ColorPrimary400="bg-[#41b73c] "
                TopShadow="top-2"
                LeftShadow="left-[33px]"
                // href={"https://www.instagram.com/didadump.0_0"}
                href={`https://wa.me/+62${nomer}?text=I'm%20${nameInputs}%20dengan%20kode%20${code}%20pengajuan%20${value}`}
                target={"_blank"}
              >
                Whatsapp
              </ButtonOutline>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Success;
