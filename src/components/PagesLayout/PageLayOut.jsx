import React from "react";
import { useLocation } from "react-router-dom";

const PageLayOut = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <div>
      <h1 className="text-white">{url === "/about-us"?'About Us':''}</h1>
      <h1 className="text-white">{url === "/products"?'Products':''}</h1>
      <h1 className="text-white">{url === "/blogs"?'Blogs':''}</h1>
      <h1 className="text-white">{url === "/contact-us"?'Contact Us':''}</h1>
      <h1 className="text-white">Hii</h1>
    </div>
  );
};

export default PageLayOut;
