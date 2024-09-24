import { ButtonGetDown } from "../Components/Button";
import { BlueBanner } from "../helper";
import styles from "../helper/style";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";

const LocationPage = () => {
  return (
    <>
      <section className="">
        <section className={`flex flex-col md:flex-row pb-6 sm:pb-16`}>
          <div
            className={`flex-1 flex-col shadow-[0px_0px_56px_90px_#fcfffe] ss:shadow-[0px_0px_48px_105px_#fcfffe] gap-2 ${styles.flexStart} ${styles.marginY} ${styles.paddingX}`}
          >
            <h2 className={`${styles.heading2}`}>Lokasi</h2>
            <div className="text-abuGelap">
              <ul className="list-disc list-inside">
                <h2 className={`${styles.fontBodyBold} text-merahh-500`}>
                  Kantor Pusat:
                </h2>
                <li>Jl. Elang Raya</li>
                <h2 className={`${styles.fontBodyBold} text-biruMuda-500`}>
                  Kantor Kas:
                </h2>
                <li>Jl. Gajah Raya</li>
                <li>Jl. Untung</li>
                <li>Jl. Kol</li>
              </ul>
            </div>
            <ButtonGetDown />
          </div>

          <div className="flex-1">
            <img
              src={BlueBanner}
              alt="Foto Banner"
              className="w-full h-full relative -z-[1]"
            />
          </div>
        </section>
        <TitleBlueBanner title={"Lokasi"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div className="flex justify-between mt-20 ">
          <div className="flex-none p-10">
            <h6 className={`${styles.heading4} mb-10`}>Lokasi Kami</h6>

            <div className="">
              <h2 className={`${styles.heading5}`}>Kantor Pusat</h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Elang Raya No. 99 Mangunharjo, Tembalang, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Selasa</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Rabu</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Kamis</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Jumat</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Sabtu</p>
                <p className="flex-auto text-xl">08:00 - 13:00</p>
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

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div className="flex justify-between mt-20 ">
          <div className="flex-none p-10">

            <div className="">
              <h2 className={`${styles.heading5}`}>Kantor Kas Gajah </h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Gajah Raya No. 155, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Selasa</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Rabu</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Kamis</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Jumat</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Sabtu</p>
                <p className="flex-auto text-xl">08:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63363.17426659836!2d110.39369218248164!3d-6.985896064714817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708cb8ce22a96f%3A0xc90fd38b29a4a39!2sPT.%20BPR%20Arto%20Moro!5e0!3m2!1sid!2sid!4v1727150026455!5m2!1sid!2sid"
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

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div className="flex justify-between mt-20 ">
          <div className="flex-none p-10">

            <div className="">
              <h2 className={`${styles.heading5}`}>Kantor Kas Kalipancur </h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Untung Suropati No. 18 Kav.5, Kalipancur, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Selasa</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Rabu</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Kamis</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Jumat</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Sabtu</p>
                <p className="flex-auto text-xl">08:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.710098900985!2d110.30874802167966!3d-7.0114135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b0248046a7b%3A0x7cfa34011298f579!2sBank%20BPR%20Arto%20Moro!5e0!3m2!1sid!2sid!4v1727150272851!5m2!1sid!2sid"
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

      <div className="bg-abuTerang p-10 w-auto m-5 ">
        <div className="flex justify-between mt-20 ">
          <div className="flex-none p-10">

            <div className="">
              <h2 className={`${styles.heading5}`}>Kantor Kas Bulusan </h2>
              <p className={`${styles.fontBody} flex-auto`}>
                Jl. Kol.H.Imam Suprapto No.1 Bulusan, Tembalang, Semarang
              </p>

              <div className="flex justify-between mt-5">
                <p className="flex-auto text-xl">Senin</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Selasa</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Rabu</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Kamis</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Jumat</p>
                <p className="flex-auto text-xl">08:00 - 16:00</p>
              </div>
              <div className="flex mt-5">
                <p className="flex-auto text-xl">Sabtu</p>
                <p className="flex-auto text-xl">08:00 - 13:00</p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63353.01228503741!2d110.37449322167971!3d-7.0604900999999956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708f38030bedb9%3A0x1c5c9d9477088d7b!2sKantor%20Kas%20BPR%20Artomoro!5e0!3m2!1sid!2sid!4v1727150386926!5m2!1sid!2sid"
                width="600"
                height="450"
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
