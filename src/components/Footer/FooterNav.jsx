import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-evenly my-12">
        <Link to={"/"}>
          <li className="text-lg text-white font-semibold p-3 bg-[#000000]  rounded-xl cursor-pointer">
            Home
          </li>
        </Link>
        <Link to={"/about-us"}>
          <li className="text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer">
            More Information
          </li>
        </Link>{" "}
        <Link to={"/contact-us"}>
          <li className="text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer">
            Talk To Us
          </li>
        </Link>{" "}
        <Link to={"/blogs"}>
          <li className="text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer">
            New & Blogs
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default FooterNav;
