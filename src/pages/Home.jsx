import React from "react";
import HeroSection from "../components/HomeHeroSection/HeroSection";
import BlogsComponent from "../components/Blogs/BlogsComponent";
import ProductsComponent from "../components/Products/ProductsComponent";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>

      {/* <hr className="w-full border-t-1 border-[#D2D2D2]"/> */}
      {/* Blogs */}

      <div className="mt-[87vh] sm:mt-[93vh] md:mt-[87vh] lg:mt-[77vh]">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-14">
          <div className="w-1/12 sm:w-1/8 md:w-1/6 lg:w-1/7 border-t-4 border-[#D2D2D2]"></div>
          <span className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center">
            Blogs
          </span>
          <div className="w-1/12 sm:w-1/8 md:w-1/6 lg:w-1/7 border-t-4 border-[#D2D2D2]"></div>
        </div>
        <BlogsComponent />
      </div>
      {/* Products */}

      <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-14 mt-10">
        <div className="w-1/12 sm:w-1/8 md:w-1/6 lg:w-1/7 border-t-4 border-[#D2D2D2]"></div>
        <span className="text-[#D2D2D2] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center">
          Products
        </span>
        <div className="w-1/12 sm:w-1/8 md:w-1/6 lg:w-1/7 border-t-4 border-[#D2D2D2]"></div>
      </div>
      <ProductsComponent />
    </div>
  );
};

export default Home;
