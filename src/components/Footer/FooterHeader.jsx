import React from "react";
import twitter from "../images/footer/twitter.webp";
import youtube from "../images/footer/youtube.jpeg";
import whatsapp from "../images/footer/whatsapp2.jpg";

import instagram from "../images/footer/instagram.webp";

const FooterHeader = () => {
  return (
    <div className="flex items-center justify-center gap-6 p-4">
      <a href="https://twitter.com" target="_blank">
        <img className="h-20 rounded-4xl" src={twitter} alt="Twitter" />
      </a>
      <a href="https://www.youtube.com" target="_blank">
        <img className="h-20 w-20 rounded-full" src={youtube} alt="Youtube" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank">
        <img className="h-20 rounded-full" src={whatsapp} alt="Whatsapp" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img className="h-20 rounded-full" src={instagram} alt="instagram" />
      </a>
    </div>
  );
};

export default FooterHeader;
