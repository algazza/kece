import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
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
    </div>
  );
};

export default Home;
