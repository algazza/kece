import React from "react";
import styles from "../helper/style";
import { BlueBanner, profileMisi, profileNilai, profileVisi } from "../helper";
import IntroBanner from "../Layouts/IntroBanner";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";

const VisiMisi = () => {
  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Visi Misi"}
          DescriptionBanner={"Profesional, Unggul, Maju, Jaya"}
        />
        <TitleBlueBanner title={"Visi Misi"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>
      
      <section className="px-8 sm:px-24 py-8 bg-biruMuda-100" id="visi-misi">
        <h2 className={`${styles.heading4} mb-4`}>Visi</h2>
        <ol className="list-disc pl-4">
          {profileVisi.map((visi, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
              {visi}
            </li>
          ))}
        </ol>
      </section>

      <section className="px-8 sm:px-24 py-8">
        <h2 className={`${styles.heading4} mb-4`}>Misi</h2>
        <ul className="list-disc pl-4">
          {profileMisi.map((visi, index) => (
            <li key={index} className="flex items-center mb-2 list-disc">
              <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
              {visi}
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.paddingX} py-8 bg-biruMuda-100`}>
        <h2 className={`${styles.heading4} mb-4`}>Nilai-Nilai Perusahaan</h2>
        <p className="mb-4">
          Berpedoman kepada nilai-nilai pendirian perusahaan dan seiring dengan
          perkembangan dan perubahan bisnis yang sangat dinamis, BPR Arto Moro
          melakukan penyempurnaan nilai-nilai perusahaan untuk mencapai tujuan
          sesuai dengan visi dan misi Perusahaan.
        </p>

        <div className="grid sm:grid-cols-2 justify-between gap-6 sm:gap-16">
          {profileNilai.map((nilai) => (
            <div className="flex" key={nilai.id}>
              <h1 className={`${styles.heading1} text-biruMuda-500 mr-8`}>
                {nilai.id}
              </h1>
              <div>
                <h2 className={`${styles.heading4}`}>{nilai.title}</h2>
                <p className="">{nilai.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VisiMisi;
