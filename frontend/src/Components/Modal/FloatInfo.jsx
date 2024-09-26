import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from '../../helper/style';
import WaInput from '../WaInput';
import RemoveIcon from "@mui/icons-material/Remove";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from '@mui/icons-material/Call';

const FloatInfo = () => {
    const [addShortcut, setAddShortcut] = useState(false);
    const [modal, setModal] = useState(false);

    function handleModal() {
      setModal(!modal);
    }

    const handleSetAddShortcut = () => {
      setAddShortcut(!addShortcut);
    };
  return (
    <div className="fixed bottom-8 right-4 z-[98]">
    <AnimatePresence>
      {addShortcut == true && (
        <>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={handleModal}
            className={`bg-[#25D366] rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] cursor-pointer`}
          >
            <WhatsAppIcon className="text-white" />
          </motion.a>

          {modal && <WaInput handleModal={handleModal} />}
        </>
      )}

      {addShortcut == true && (
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          href="mailto:info@bprartomoro.co.id"
          target="_blank"
          className={`bg-abuGelap rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] my-2`}
        >
          <EmailIcon className="text-white" />
        </motion.a>
      )}

      {addShortcut == true && (
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          href="lokasi"
          className={`bg-merahh-500 rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] mb-4`}
        >
          <LocationOnIcon className="text-white" />
        </motion.a>
      )}
    </AnimatePresence>

    <div className={styles.flexCenter}>
      <a
        onClick={handleSetAddShortcut}
        className={`bg-abuGelap rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[98] cursor-pointer`}
      >
        {addShortcut == false ? (
          <CallIcon className="text-white" />
        ) : (
          <RemoveIcon className="text-white" />
        )}
      </a>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: [1, 0], scale: [1, 3.25] }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        className="bg-[#e0e0e0] px-4 py-4 rounded-full absolute z-[97]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: [1, 0], scale: [1, 2.5] }}
        transition={{
          duration: 2,
          ease: "easeOut",
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        className="bg-[#a2a2a2] px-4 py-4 rounded-full absolute z-[97]"
      ></motion.div>
    </div>
  </div>
  )
}

export default FloatInfo