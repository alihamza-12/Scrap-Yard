import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaRocket, FaInfoCircle } from "react-icons/fa";

import img1 from "../../assets/Slider/1.jpg";
import img2 from "../../assets/Slider/3.jpg";
import img3 from "../../assets/Slider/8.jpg";
import img4 from "../../assets/Slider/3.jpg";

const HeroSection = () => {
  //Slider Setting
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5500,
    cssEase: "linear",
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  //Images
  const images = [img1, img2, img3, img4];

  return (
    <div className="absolute top-0 w-full h-screen">
      <div className="absolute md:left-8 lg:left-12 bottom-0 md:bottom-0 lg:bottom-2 z-20 pointer-events-none text-white">
        <div className="pointer-events-auto max-w-lg lg:max-w-xl bg-gradient-to-br from-black/80 via-black/70 to-black/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-yellow-500/20 animate-fade-in border border-yellow-400/30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-left text-yellow-400 drop-shadow-lg">
            Scrap pheko nhi
            <br />
            <span className="text-orange-300">Scrap becho</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-left text-gray-200 mb-6 drop-shadow-md">
            Discover the hidden value in your unwanted items. Buy, sell and
            recycle scrap efficiently with{" "}
            <span className="text-amber-400 font-semibold">Scrap Yard</span>,
            your one-stop marketplace for sustainable trading.
          </p>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              className="w-full h-screen object-cover"
              src={img}
              alt={`slide-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
