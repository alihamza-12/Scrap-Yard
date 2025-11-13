import React from "react";
import { useLocation } from "react-router-dom";
import banner from "../images/banner3.png";

const PageLayOut = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <div>
      {/* Heading */}
      <div className="my-2 md:my-12 sm:my-4 lg:my-28">
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/products" ? "Products" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/blogs" ? "Blogs" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/about-us" ? "About Us" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/contact-us" ? "Contact Us" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/register" ? "Register Your Account" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/login" ? "Login Your Account" : ""}
        </h1>
        <h1 className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-[76px] font-extralight text-center">
          {url === "/my-account" ? "My Account" : ""}
        </h1>
      </div>
      {/* PageLayOut Picture */}

      <img
        className="w-full object-fit-cover my-10 sm:my-10 md:my-10 lg:my-20 "
        src={banner}
        alt="Banner-Pic"
      />
    </div>
  );
};

export default PageLayOut;
