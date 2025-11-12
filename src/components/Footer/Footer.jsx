import React from "react";
import FooterHeader from "./FooterHeader";
import FooterNav from "./FooterNav";
import FooterCopyRight from "./FooterCopyRight";

const Footer = () => {
  return (
    <div className="bg-[url(./components/images/view-bg.jpg)]">
      <FooterHeader />
      <FooterNav />
      <FooterCopyRight />
    </div>
  );
};

export default Footer;
