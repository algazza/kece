import React, { useState } from "react";
import styles from "../helper/style";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../helper";
import { Form, useNavigate } from "react-router-dom";

const image = [
  "https://biboeternal.vercel.app/image/El-BG.png",
  "https://biboeternal.vercel.app/image/Ahmed-BG.png",
  "https://biboeternal.vercel.app/image/Jeki-BG.png",
  "https://biboeternal.vercel.app/image/Raka-BG.png",
  "https://biboeternal.vercel.app/image/Amara-BG.png",
  "https://biboeternal.vercel.app/image/Ofi-BG.png",
];

const Sejarah = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success", { state: { userName } });
  };

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Sejarah"}
          DescriptionBanner={"Profesional, Unggul, Maju, Jaya"}
        />
        <TitleBlueBanner title={"Pick Up Service"} />
      </section>

      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <h2 className={`${styles.heading4} text-center text-biruMuda-500`}>
          PROFILE
        </h2>
        <p className="text-center">
          Temukan informasi tentang pimpinan perusahaan BPR Arto Moro dan
          kontribusi mereka dalam memberikan layanan terbaik bagi nasabah kami.
        </p>

        <div className="flex gap-4 py-8 justify-center">
          <div className="border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0">
            Dewan Komisaris
          </div>
          <div className="border-biruMuda-500 text-biruMuda-500 hover:bg-biruMuda-500 hover:text-primary duration-500 border-2 px-6 py-2 rounded-md font-bold cursor-pointer flex-shrink-0">
            Direksi
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="">
            <div className="lw-[40%]">
              <h2 className={`${styles.heading4}`}>El Rakkai, S.Sos, S.Pd</h2>
              <h3 className={`${styles.heading6} font-semibold mb-4`}>
                Siswa Biasa
              </h3>

              <p className="">
                “Kita ingin mewujudkan kota cerdas dan modern berstandar
                internasional, menjadikan ikon urban desain sebagai representasi
                kemajuan bangsa yang unggul.”{" "}
              </p>
            </div>

            <img
              src="https://biboeternal.vercel.app/image/El-BG.png"
              alt=""
              // className="max-h-[300px]"
            />
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4">
              {image.map((img, index) => (
                <div key={index}>
                  <div className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden">
                    <img src={img} alt="" className="" />
                  </div>
                  <div className="pt-2">
                    <h3 className={`${styles.fontBodyBold}`}>El Rakkai Omar Wahid</h3>
                    <p className={`${styles.fontCaption}`}>Murid absen 8</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sejarah;
