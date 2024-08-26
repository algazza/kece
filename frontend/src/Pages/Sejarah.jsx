import React, { useState } from "react";
import styles from "../helper/style";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import {
  BlueBanner,
  logoArmor,
  profileDewanKomisaris,
  profileTimeline,
} from "../helper";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// ===================================================
const buttonMenuProfile = [
  {
    id: 1,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Investasi",
    deskripsi: "panduan perilaku dan prinsip moral bagi karyawan bank.",
  },
  {
    id: 2,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Modal",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit KPR",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Multiguna",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pensiun",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 6,
    icon: (className) => <TrendingUpIcon className={className} />,
    title: "Kredit Pensiun",
    deskripsi: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const steps = ["2008", "2019", "2020", "2023"];

const Sejarah = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState(1);

  // timeline
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  // profile
  function updateProfile(id) {
    setProfile(id);
  }

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

      <section className={`${styles.paddingY} w-full`}>
        <div className="relative flex justify-between mx-auto max-w-2xl">
          {profileTimeline.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  index <= currentStep ? "bg-biruMuda-500" : "bg-gray-300"
                }`}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                }}
                onClick={() => handleStepClick(index)}
              >
                <span className="text-white text-sm">{index + 1}</span>
              </motion.div>
              <span className="mt-2 text-sm">{step.id}</span>
            </div>
          ))}
          <div className="absolute top-4 left-0 right-0 h-1 bg-gray-300 -z-[1] rounded-full mx-2">
            <motion.div
              className="h-full bg-biruMuda-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{
                width: `${(currentStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>
        </div>

        {profileTimeline.map((timlin, index) => {
          return (
            currentStep === index && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                key={timlin.id}
                className={`flex flex-col ${
                  index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
                }  my-8`}
              >
                <div className="flex-1">
                  <img
                    src={timlin.image}
                    alt=""
                    className="w-full h-full relative -z-[1]"
                  />
                </div>

                <div
                  className={`flex-1 flex-col shadow-[0px_0px_56px_90px_#fcfffe] ss:shadow-[0px_0px_48px_60px_#fcfffe] gap-2 ${styles.flexStart} px-8`}
                >
                  <h2 className={`${styles.heading4}`}>{timlin.title}</h2>
                  <p className="text-abuGelap">{timlin.description}</p>
                  <h3 className={`${styles.heading6} text-biruMuda-400`}>
                    {timlin.id}
                  </h3>
                </div>
              </motion.div>
            )
          );
        })}

        <div className="flex justify-between m-auto max-w-2xl">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-biruMuda-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-biruMuda-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </section>

      <section className="px-8 sm:px-24 py-8 bg-biruMuda-100">
        <h2 className={`${styles.heading4} mb-4`}>Visi</h2>
        <ol className="list-none pl-4">
          <li className="flex items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </li>
          <li className="flex items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain mr-2 bg-checkmark"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam,
          </li>
        </ol>
      </section>

      <section className="px-8 sm:px-24 py-8 text-end">
        <h2 className={`${styles.heading4} mb-4`}>Misi</h2>
        <ol className="list-none pr-4 ">
          <li className="flex flex-row-reverse items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain ml-2 bg-checkmark"></span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          </li>
          <li className="flex flex-row-reverse items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain ml-2 bg-checkmark"></span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          </li>
          <li className="flex flex-row-reverse items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain ml-2 bg-checkmark"></span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </li>
          <li className="flex flex-row-reverse items-center mb-2">
            <span className="inline-block w-6 h-6 bg-no-repeat bg-center bg-contain ml-2 bg-checkmark"></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et numquam,
          </li>
        </ol>
      </section>

      <section className={`${styles.paddingX} py-8 bg-biruMuda-100`}>
        <h2 className={`${styles.heading4} mb-4`}>Nilai-Nilai Perusahaan</h2>
        <p className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero odit
          possimus deleniti hic dicta blanditiis eum cupiditate facere, commodi
          exercitationem, nihil ratione, excepturi pariatur suscipit ex dolores
          adipisci mollitia rem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae reiciendis cupiditate sunt hic dignissimos
          tenetur quidem repellendus non temporibus dolorem! Earum amet
          necessitatibus id aliquid eum aliquam esse eveniet vero?
        </p>

        <div className="grid sm:grid-cols-2 justify-between gap-20">
          <div className="grid">
            <h1
              className={`${styles.heading1} text-biruMuda-500 col-[1/2] row-[1/3] mr-6`}
            >
              1
            </h1>
            <h2 className={`${styles.heading4} col-[2/3] row-[1/2]`}>
              Terpercaya
            </h2>
            <p className="col-[2/3] row-[2/3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              natus rerum repellat facilis fugiat accusamus, aliquid non minus
              atque exercitationem ipsa,
            </p>
          </div>

          <div className="grid">
            <h1
              className={`${styles.heading1} text-biruMuda-500 col-[1/2] row-[1/3] mr-6`}
            >
              2
            </h1>
            <h2 className={`${styles.heading4} col-[2/3] row-[1/2]`}>
              Terpercaya
            </h2>
            <p className="col-[2/3] row-[2/3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              natus rerum repellat facilis fugiat accusamus, aliquid non minus
              atque exercitationem ipsa,
            </p>
          </div>

          <div className="grid">
            <h1
              className={`${styles.heading1} text-biruMuda-500 col-[1/2] row-[1/3] mr-6`}
            >
              3
            </h1>
            <h2 className={`${styles.heading4} col-[2/3] row-[1/2]`}>
              Terpercaya
            </h2>
            <p className="col-[2/3] row-[2/3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              natus rerum repellat facilis fugiat accusamus, aliquid non minus
              atque exercitationem ipsa,
            </p>
          </div>

          <div className="grid">
            <h1
              className={`${styles.heading1} text-biruMuda-500 col-[1/2] row-[1/3] mr-6`}
            >
              4
            </h1>
            <h2 className={`${styles.heading4} col-[2/3] row-[1/2]`}>
              Terpercaya
            </h2>
            <p className="col-[2/3] row-[2/3]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              natus rerum repellat facilis fugiat accusamus, aliquid non minus
              atque exercitationem ipsa,
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
        <div className="md:flex gap-40 px-4 md:px-12 sm:pb-12 relative">
          <div className="">
            <h1 className={`${styles.heading4} mb-8`}>
              Good Corporate Governance (GCG)
            </h1>
            <p className="text-abuGelap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              libero dolorem voluptate ipsam molestiae sit tempore cupiditate,
              m12odi sint laborum amet necessitatibus similique id assumenda
              suscipit iure, harum architecto alias? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. A possimus, odit dolorum tempore
              suscipit, illum deleniti qui veritatis, recusandae perspiciatis
              ratione? Blanditiis amet magnam saepe est quaerat voluptas placeat
              provident.
            </p>
          </div>
          <img
            src={logoArmor}
            alt=""
            className="left-1/2 top-[20%] max-md:-translate-x-1/2 opacity-10 md:opacity-100 max-md:absolute w-[280px] h-[280px]"
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8">
          {buttonMenuProfile.map((menu, index) => (
            <div
              className={`bg-abuTerang drop-shadow-lg rounded-lg p-5 w-72 flex flex-col items-center align-middle text-center cursor-pointer`}
              key={index}
            >
              {menu.icon("m-2 text-blue-400")}
              <h6 className={`${styles.heading6}`}>{menu.title}</h6>
              <p className="mt-4">{menu.deskripsi}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.paddingY} bg-abuTerang`}>
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profileDewanKomisaris.map((speech) => {
            return (
              profile === speech.id && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className=""
                >
                  <h2 className={`${styles.heading4}`}>{speech.name}</h2>
                  <h3 className={`${styles.heading6} font-semibold mb-4`}>
                    {speech.position}
                  </h3>

                  <p className="">{speech.speech}</p>
                </motion.div>
              )
            );
          })}

          {profileDewanKomisaris.map((img) => {
            return (
              profile === img.id && (
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  src={img.image}
                  alt=""
                />
              )
            );
          })}

          <div className="sm:col-span-2 md:col-span-1">
            <div className="grid grid-cols-3 gap-4">
              {profileDewanKomisaris.map((menu) => (
                <motion.div
                  key={menu.id}
                  className="grid justify-items-center cursor-pointer"
                  onClick={() => updateProfile(menu.id)}
                >
                  <div className="w-[96px] h-[96px] rounded-full bg-abuGelap overflow-hidden">
                    <img
                      src={menu.image}
                      alt=""
                      className={`${
                        profile === menu.id &&
                        "bg-blue-300 transition-all duration-500"
                      }`}
                    />
                  </div>
                  <div className="pt-2 text-center">
                    <h3 className={`${styles.fontBodyBold}`}>{menu.name}</h3>
                    <p className={`${styles.fontCaption}`}>{menu.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sejarah;
