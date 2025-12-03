// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

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
  };
  //Images
  const images = [img1, img2, img3, img4];

  return (
    <div className="absolute top-0 w-screen h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              className="w-screen h-screen object-cover block"
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
