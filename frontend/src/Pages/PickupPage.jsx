import Header from "../Layouts/Header";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import Footer from "../Layouts/Footer";
import FormBank from "../Components/FormBank";
import { PickupService } from "../Components/Form";
import styles from "../data/style";
import { samplebanner } from "../data";

const PickupPage = () => {
  return (
    <>
      <Header />
      <main className="sm:py-0 py-6">
        <section>
          <IntroBanner
            ImageBanner={samplebanner}
            TitleBanner={"Deposito"}
            DescriptionBanner={`
                  Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                  memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                  dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                  menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                  keperluan Anda.
                `}
          />
          <TitleBlueBanner title={"Deposito"} />
        </section>

        <section className={`${styles.flexCenter}`}>
          <FormBank
            isiPenting={<PickupService />}
            value={"Pickup"}
            page={"/KreditPage"}
            endpoint={"http://localhost:8000/api/kredit"}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PickupPage;
