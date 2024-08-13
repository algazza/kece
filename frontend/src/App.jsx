import styles from "./data/style";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
    <Header/>
      <main className={`overflow-hidden font-jakarta ${styles.fontBody} sm:py-0 py-6`}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
