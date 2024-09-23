import { useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./helper/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { nomorInduk } from "./helper/nomor";

const MainLayout = () => {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main
        className={`overflow-hidden font-jakarta ${styles.fontBody} py-[4.5rem]`}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>

        <div className="fixed bottom-8 right-4 z-[100]">
          <a
            href={`https://wa.me/+62${nomorInduk}`}
            target="_blank"
            className={`bg-merahh-500 rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] my-2`}
          >
            <LocationOnIcon className="text-white" />
          </a>

          <a
            href="mailto:info@bprartomoro.co.id"
            target="_blank"
            className={`bg-abuGelap rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] my-2`}
          >
            <EmailIcon className="text-white" />
          </a>

          <a
            href={`https://wa.me/+62${nomorInduk}`}
            target="_blank"
            className={`bg-[#25D366] rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100] mt-2 mb-4`}
          >
            <WhatsAppIcon className="text-white" />
          </a>

          <div className={styles.flexCenter}>
            <a
              target="_blank"
              className={`bg-abuGelap rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[99]`}
            >
              <AddIcon className="text-white" />
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
              className="bg-[#d3f6e0] px-4 py-4 rounded-full absolute z-[98]"
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
              className="bg-[#7ce5a3] px-4 py-4 rounded-full absolute z-[98]"
            ></motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
