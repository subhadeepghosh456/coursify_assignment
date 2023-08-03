import React, { useState, useEffect } from "react";
import { imageInformation } from ".././utils";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Imageslider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % imageInformation.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + imageInformation.length) % imageInformation.length
    );
  };

  useEffect(() => {
    const timmer = setInterval(handleNextImage, 3000);
    return () => {
      clearInterval(timmer);
    };
  }, []);
  return (
    <div className="imageslider">
      <div className="prv" onClick={handlePrevImage}>
        {<AiOutlineArrowLeft size={24} />}
      </div>
      <div className="imageslider-container">
        {imageInformation[currentImageIndex].item}
      </div>
      <div className="nxt" onClick={handleNextImage}>
        {<AiOutlineArrowRight size={24} />}
      </div>
    </div>
  );
};

export default Imageslider;
