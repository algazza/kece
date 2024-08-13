import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { nunezimg, sampleBanner } from "../data";
import ImageBanner from "./ImageBanner";

const images = [
  sampleBanner,
  sampleBanner,
];

const Home = () => {

  return (
    <div className="">
      <ImageBanner images={images}/>
      <div className="clip-custom-shape"><img src={nunezimg} alt=""/></div>
    </div>
  );
};

export default Home;
