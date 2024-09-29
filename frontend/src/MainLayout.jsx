import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./helper/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import { MenuProvider } from "./MenuProvider";
import WaInput from "./Components/WaInput";
import FloatInfo from "./Components/Modal/FloatInfo";

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
      </main>
      <Footer />
      <FloatInfo/>
    </MenuProvider>
  );
};

export default MainLayout;
