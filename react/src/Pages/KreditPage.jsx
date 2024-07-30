import Kredit from "@/Components/Form/Kredit";
import FormBank from "@/Components/FormBank";
import Footer from "../Layouts/Footer";
import styles from "../data/style";
import IntroBanner from "../Layouts/IntroBanner";

const KreditPage = () => {
  return (
    <>
      <div className="">
        <IntroBanner />
      </div>
      <section className={`${styles.flexCenter}`}>
        <FormBank
          isiPenting={<Kredit />}
          value={"Kredit"}
          page={"/KreditPage"}
          endpoint={"http://localhost:8000/api/kredit"}
        />
      </section>
      <Footer />
    </>
  );
};

export default KreditPage;
