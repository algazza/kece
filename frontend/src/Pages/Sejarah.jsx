import React, { useState } from "react";
import styles from "../data/style";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import { BlueBanner } from "../data";
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
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              name="userName"
              required
              placeholder="Lets we see your name!"
              aria-label="Your Name"
              autoComplete="given-name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">
              <span>Create Account</span>
            </button>
          </Form>
        </div>

        <div className="flex">
          <div className="">
            <div className="">
              <h2 className={`${styles.heading5}`}>El Rakkai, S.Sos, S.Pd</h2>
              <h3 className={`${styles.heading6} font-semibold mb-4`}>
                Siswa Biasa
              </h3>

              <p className=""></p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {image.map((img, index) => (
              <div
                key={index}
                className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden"
              >
                <img src={img} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sejarah;
