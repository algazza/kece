import { BlueBanner } from "../helper";
import styles from "../helper/style";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";

const LocationPage = () => {
  return (
    <>
      <section className="">
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Location"}
          DescriptionBanner={`
                Selamat datang di BPR Arto Moro, solusi finansial terpercaya untuk
                memenuhi berbagai kebutuhan Anda. Kami memahami bahwa setiap individu
                dan usaha memiliki kebutuhan yang unik, oleh karena itu kami
                menawarkan berbagai produk kredit yang dapat disesuaikan dengan
                keperluan Anda.
            `}
          hook
          paragraf
        />
        <TitleBlueBanner title={"Lokasi"} />
      </section>

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div>
          <h3 className={`${styles.heading2} text-center`}>Mari Kita Lihat</h3>
          <p className={`${styles.fontBody} font-normal mt-5 text-center `}>
            Kami selalu siap mendengar dan membantu Anda! Jika Anda memiliki
            pertanyaan, butuh bantuan, atau ingin tahu lebih lanjut tentang
            produk dan layanan kami, jangan ragu untuk menghubungi kami. Tim
            kami yang ramah dan profesional akan dengan senang hati menjawab
            semua kebutuhan Anda secepat mungkin
          </p>
        </div>

        <div className="flex justify-between mt-20 ">
          <div className="  flex-none p-10 ">
            <h6 className={`${styles.heading4} mb-10`}>Find our Office</h6>

            <div className="">
              <h2 className={`${styles.heading5}`}>
                Office Bank BPR Arto Moro
              </h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Selasa</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Rabu</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Kamis</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Jumat</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Sabtu</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="">
              <iframe
                className="rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.726844710513!2d110.46356827504492!3d-7.041353492960724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708d4a93de1f07%3A0xc0c45f754cb4c6!2sBank%20Bpr%20Arto%20Moro!5e0!3m2!1sid!2sid!4v1722830824389!5m2!1sid!2sid"
                width="700"
                height="550"
                style={{ marginRight: 3 + "em" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage; //mahes 5 agustus 2024 // location page
