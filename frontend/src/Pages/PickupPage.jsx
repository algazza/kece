import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import FormBank from "../Components/Group Form/FormBank.jsx";
import { PickupService } from "../Components/Group Form/Form.jsx";
import styles from "../helper/style";
import { BlueBanner } from "../helper";
import { nomorInduk } from "../helper/nomor";
import { localhostLink } from "../helper/localhost";

const PickupPage = () => {
  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Pick Up Service"}
          DescriptionBanner={`
                  Layanan pick up service BPR Arto Moro memudahkan nasabah dengan mengunjungi mereka di kantor atau rumah untuk 
                  setoran deposito atau tabungan. Nasabah cukup menghubungi tim Marketing Funding untuk mengatur janji temu, 
                  tanpa harus datang langsung ke bank. Layanan ini dirancang untuk nasabah yang sibuk, menawarkan kenyamanan 
                  dan efisiensi transaksi.
                `}
        />
        <TitleBlueBanner title={"Pick Up Service"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <section className={`${styles.flexCenter}`}>
        <FormBank
          isiPenting={<PickupService />}
          value={"Pickup"}
          nomer={nomorInduk}
          page={"/PickupPage"}
          endpoint={`${localhostLink}/api/Pickup`}
        />
      </section>
    </>
  );
};

export default PickupPage;
