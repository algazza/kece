import { samplebanner } from "../data";
import styles from "../data/style";
import Footer from "../Layouts/Footer";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";

const LocationPage = () => {
  return (
    <>
      <div className="">
        <IntroBanner
          ImageBanner={samplebanner}
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
        <TitleBlueBanner title={"Our Location"} />
      </div>

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div>
          <h3 className="text-6xl text-center ">Get In Touch</h3>
          <p className="mt-5 text-center text-xl">
            Lorem ipsum dolor sit amet consectetur. Semper ultricies et tortor
            tempus hac viverra nulla tristique. Est magna dolor quis dignissim
            viverra amet. Est tempus non diam eu tincidunt at vulputate
            venenatis. Vel tellus nibh tortor fermentum faucibus hendrerit.
          </p>
        </div>

        <div className="flex justify-between mt-20 ">
          <div className="  flex-none p-10 ">
            <h6 className={`${styles.heading4} mb-10`}>Find our Office</h6>

            <div className="flex align-middle w-1/4 mt-5 mb-5">
              <h4
                className={`${styles.heading6} flex-auto border-2 rounded-md p-1`}
              >
                Office
              </h4>
              <div className="bg-abuGelap p-0.5 h1 m-1"></div>
              <h4
                className={`${styles.heading6} flex-auto border-2 rounded-md p-1 text-gray-500 flex-shrink-0`}
              >
                Kantor Kas
              </h4>
            </div>

            <div className="">
              <h2 className={`${styles.heading5}`}>Bank BPR Arto Moro</h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">9.00 pagi - 6 .00 Malam</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Senin</p>
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
      <Footer />
    </>
  );
};

export default LocationPage; //mahes 5 agustus 2024 // location page
