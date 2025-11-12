import React from "react";
import twitter from "../images/footer/twitter.webp";
import youtube from "../images/footer/youtube.jpeg";
import whatsapp from "../images/footer/whatsapp2.jpg";

import instagram from "../images/footer/instagram.webp";

const FooterHeader = () => {
  return (
    <div className="flex items-center justify-center gap-6 p-4">
      <img className="h-20 rounded-4xl" src={twitter} alt="" />
      <img className="h-20 w-20 rounded-full" src={youtube} alt="" />
      <img className="h-20 rounded-full" src={whatsapp} alt="" />
      <img className="h-20 rounded-full" src={instagram} alt="" />
    </div>
  );
};

export default FooterHeader;
