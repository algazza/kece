import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import styles from "./data/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const App = () => {
  return (
    <>
      <Header />
      <main
        className={`overflow-hidden font-jakarta ${styles.fontBody} py-[4.5rem]`}
      >
        <Outlet />
        <div className="fixed bottom-12 right-12">
          <div className={`${styles.flexCenter}`}>
            <a
              href="https://www.instagram.com/stories/highlights/18006888113341028/"
              target="_blank"
              className={`bg-[#25D366] rounded-full w-[55px] h-[55px] ${styles.flexCenter} z-[1]`}
            >
              <WhatsAppIcon className="text-white" />
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
              className="bg-[#d3f6e0] px-4 py-4 rounded-full absolute"
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
              className="bg-[#7ce5a3] px-4 py-4 rounded-full absolute"
            ></motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
