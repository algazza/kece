import React, { useEffect, useState } from "react";
import styles from "../helper/style";
import TitleBlueBanner from "../Layouts/TitleBlueBanner";
import IntroBanner from "../Layouts/IntroBanner";
import {
  BlueBanner,
  logoArmor,
  profileDewanKomisaris,
  profileMisi,
  profileNilai,
  profileTimeline,
  profileVisi,
} from "../helper";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Sejarah = () => {
  const [currentStep, setCurrentStep] = useState(0);
  // timeline
  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <>
      <section>
        <IntroBanner
          ImageBanner={BlueBanner}
          TitleBanner={"Sejarah"}
          DescriptionBanner={"Profesional, Unggul, Maju, Jaya"}
        />
        <TitleBlueBanner title={"Sejarah"} />
      </section>

      <span className="-mt-[100px] pb-[100px] block" id="section2">
        &nbsp;
      </span>
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
                width: `${(currentStep / (profileTimeline.length - 1)) * 100}%`,
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
      </section>
    </>
  );
};

export default Sejarah;
