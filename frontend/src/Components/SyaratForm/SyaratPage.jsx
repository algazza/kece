import { Link } from "react-router-dom";
import { samplebanner } from "../../data";
import styles from "../../data/style";
import Footer from "../../Layouts/Footer";
import IntroBanner from "../../Layouts/IntroBanner";
import TitleBlueBanner from "../../Layouts/TitleBlueBanner";
import { ButtonFull, ButtonOutline } from "../Button";

const SyaratPage = () => {
  return (
    <>
      <div className="">
        <IntroBanner
          ImageBanner={samplebanner}
          TitleBanner={"Syarat"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
        />
        <TitleBlueBanner title={"Syarat"} />
      </div>

      <div className="h-auto mx-6 sm:mx-10 mt-10 bg-abuTerang sm:p-10 rounded-lg">
        <h3 className={`${styles.heading3} mb-10`}>Kredit Umum</h3>

        <div>
          <ul className={` text-abuGelap`}>
            <li
              className={`${styles.heading5} text-abuGelap mb-5 ml-10 list-decimal`}
            >
              Kredit Progana Ceria
            </li>

            <div className="pl-16">
              <ul className="list-disc ">
                <li>
                  Kredit Progana Ceria adalah produk kredit unggulan yang dapat
                  dinikmati secara cepat oleh para pegawai seperti Pegawai
                  Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya
                  yang telah menjalin Kerjasama dengan Bank Eka
                </li>
                <li>Keunggulan</li>
              </ul>

              <ul className="list-decimal pl-5">
                <li className="">Suku bunga anuitas</li>
                <li className="">
                  Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,-
                  (dua ratus juta ribu rupiah)
                </li>
                <li className="">
                  Jumlah maksimal jangka waktu 25 (dua puluh lima) tahun atau
                  selama 300 (tiga ratus bulan) bulan
                </li>
              </ul>
            </div>

            <li
              className={`${styles.heading5}  text-abuGelap mb-5 mt-16 ml-10 list-decimal`}
            >
              Kredit Progana
            </li>

            <div className="pl-16">
              <ul className="list-disc">
                <li>
                  Kredit Progana Ceria adalah produk kredit unggulan yang dapat
                  dinikmati secara cepat oleh para pegawai seperti Pegawai
                  Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya
                  yang telah menjalin Kerjasama dengan Bank Eka.
                </li>

                <li>
                  Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,-
                  (dua ratus juta ribu rupiah)
                </li>
              </ul>
            </div>

            <li
              className={`${styles.heading5}  text-abuGelap mb-5 mt-16 ml-10 list-decimal`}
            >
              Syarat pembukaan rekening kredit pegawai
            </li>

            <div className="pl-16">
              <ul className="list-disc">
                <li>
                  Kredit Progana Ceria adalah produk kredit unggulan yang dapat
                  dinikmati secara cepat oleh para pegawai seperti Pegawai
                  Negeri Sipil, Anggota TNI, Anggota Polri dan pegawai lainnya
                  yang telah menjalin Kerjasama dengan Bank Eka.
                </li>

                <li>
                  Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,-
                  (dua ratus juta ribu rupiah)
                </li>

                <ul className="list-decimal pl-5">
                  <li>KTP Asli</li>
                  <li>Fotocopy KTP calon nasabah dan pasangan</li>
                  <li>Fotokopi kartu keluarga</li>
                  <li>Fotokopi gaji terlegalisir</li>
                </ul>

                <li>
                  Jumlah maksimal plafon kredit sampai dengan Rp 250.000.000,-
                  (dua ratus juta ribu rupiah)
                </li>
              </ul>
            </div>
          </ul>
        </div>

        <div className="flex gap-10 mt-16">
          <ButtonFull as={Link} to="/" WidthButton="w-36" WidthShadow="w-48">
            Ajukan Kredit
          </ButtonFull>

          <ButtonOutline>Hubungi Kami</ButtonOutline>
        </div>
      </div>
      <Footer />
    </> // Mahes (1 agustus 2024)
  );
};

export default SyaratPage;
