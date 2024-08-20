import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ImageBanner = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ImageHeight, setImageHeight] = useState("auto")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 10) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else if (info.offset.x < -10) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleImageLoad = (event) => {
    setImageHeight(`${event.target.offsetHeight}px`);
  };


  return (
    <Box className="relative w-full" style={{ height: ImageHeight }}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="absolute w-full h-auto"
          style={{ top: 0, left: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          onLoad={handleImageLoad}
        />
      </AnimatePresence>
      <Box className="absolute bottom-4 left-8 flex space-x-2">
        {images.map((_, index) => (
          <Box
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer shadow-2xl ${
              index === currentIndex ? 'bg-biruMuda-500' : 'bg-biruMuda-200'
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageBanner;