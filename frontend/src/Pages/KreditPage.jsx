// ----- Folder Component -----
import IntroBanner from "../Layouts/IntroBanner";
import {Kredit} from "../Components/Form";
import FormBank from "../Components/FormBank";
import styles from "../data/style";
import { sample } from "../data/index";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";

const KreditPage = () => {
  return (
    <>
      <Header />
      <main className="sm:py-0 py-6">
        <section className="">
          <IntroBanner
            ImageBanner={sample}
            TitleBanner={"Kredit"}
            DescriptionBanner={`
              Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
              memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
              dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
              menawarkan berbagai produk kredit yang dapat disesuaikan dengan
              keperluan Anda.
            `}
          />
          <TitleBlueBanner title={"Kredit"} />
        </section>

        <section className={`${styles.flexCenter}`}>
          <FormBank
            isiPenting={<Kredit />}
            value={"Kredit"}
            page={"/KreditPage"}
            endpoint={"http://localhost:8000/api/kredit"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default KreditPage;
