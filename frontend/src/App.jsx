import styles from "./data/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import { Outlet } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const App = () => {
  return (
    <>
      <Header />
      <main
        className={`overflow-hidden font-jakarta ${styles.fontBody} py-[4.5rem]`}
      >
        <Outlet />
        <div className="w-screen h-dvh top-0 left-0 bottom-0 right-0 fixed z-[100]">
          <a className="bg-[#25D366] rounded-full p-2 absolute bottom-8 right-8"><WhatsAppIcon className="" /></a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
