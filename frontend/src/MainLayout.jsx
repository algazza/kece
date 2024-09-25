import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./helper/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { nomorInduk } from "./helper/nomor";
import { MenuProvider } from "./MenuProvider";

const MainLayout = () => {
  const [addShortcut, setAddShortcut] = useState(false);
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

  const handleSetAddShortcut = () => {
    setAddShortcut(!addShortcut);
  };

  return (
    <MenuProvider>
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
          <AnimatePresence>
            {addShortcut == true && (
              <motion.a
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.25  }}
                href={`https://wa.me/+62${nomorInduk}`}
                target="_blank"
                className={`bg-[#25D366] rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[100]`}
              >
                <WhatsAppIcon className="text-white" />
              </motion.a>
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
              className={`bg-abuGelap rounded-full w-[45px] h-[45px] ${styles.flexCenter} z-[99] cursor-pointer`}
            >
              {addShortcut == false ? (
                <AddIcon className="text-white" />
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
              className="bg-[#e0e0e0] px-4 py-4 rounded-full absolute z-[98]"
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
              className="bg-[#a2a2a2] px-4 py-4 rounded-full absolute z-[98]"
            ></motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </MenuProvider>
  );
};

export default MainLayout;
