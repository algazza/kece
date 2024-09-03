import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "../Components/FormBank";
import { PickupService } from "../Components/Form";
import styles from "../helper/style";
import { BlueBanner } from "../helper";
import { nomorInduk } from "../helper/nomor";

const PickupPage = () => {
  return (
    <>
        <section>
          <IntroBanner
            ImageBanner={BlueBanner}
            TitleBanner={"Pick Up Service"}
            DescriptionBanner={`
                  Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                  memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                  dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                  menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                  keperluan Anda.
                `}
          />
          <TitleBlueBanner title={"Pick Up Service"} />
        </section>

        <section className={`${styles.flexCenter}`}>
          <FormBank
            isiPenting={<PickupService />}
            value={"Pickup"}
            nomer={nomorInduk}
            page={"/PickupPage"}
            endpoint={"http://localhost:8000/api/Pickup"}
          />
        </section>
    </>
  );
};

export default PickupPage;
