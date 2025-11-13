import React from "react";
import FooterHeader from "./FooterHeader";
import FooterNav from "./FooterNav";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <div className="bg-[url(./components/images/view-bg.jpg)]">
      <p className="border-t-1 border-neutral-500 mx-30"></p>
      <FooterHeader />
      <FooterNav />
      <FooterCopyRight />
    </div>
  );
};

export default Footer;
