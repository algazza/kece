import Kredit from "@/Components/Form/Kredit";
import FormBank from "@/Components/FormBank";
import Footer from "../Layouts/Footer";
import styles from "../data/style";
import IntroBanner from "../Layouts/IntroBanner";
import sample from "../img/sampleimage.svg";

const KreditPage = () => {
  return (
    <section className={`${styles.paddingY}`}>
      <div className="">
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
        <div className="bg-imagebgWithTitle bg-center">
          <h1 className={`${styles.paddingY} ${styles.heading1} ${styles.flexCenter} shadow-[inset_0px_0px_34px_19px_#035B82] ss:shadow-[inset_0px_0px_64px_29px_#035B82] text-primary bg-biruMuda-500/75`}>Deposito</h1>
        </div>
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
    </section>
  );
};

export default KreditPage;
