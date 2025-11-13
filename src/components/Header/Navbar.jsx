import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      {/* On Mobile View */}
      <div className="md:hidden flex items-center justify-between bg-[#191919] px-4 py-3 md:px-8">
        <div className="text-[#D2D2D2] font-semibold text-lg">Menu</div>

        {/*Animated hamburger button - mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between w-7 h-6 focus:outline-none cursor-pointer"
        >
          <span
            className={
              "h-0.5 bg-[#D2D2D2] transition-transform duration-300 " +
              (isOpen ? "translate-y-2 rotate-45" : "")
            }
          ></span>
          <span
            className={
              "h-0.5 bg-[#D2D2D2] transition-opacity duration-300 " +
              (isOpen ? "opacity-0" : "opacity-100")
            }
          ></span>
          <span
            className={
              "h-0.5 bg-[#D2D2D2] transition-transform duration-300 " +
              (isOpen ? "-translate-y-2 -rotate-45" : "")
            }
          ></span>
        </button>
      </div>

      {/* Menu list */}
      <ul
        className={
          (isOpen ? "flex" : "hidden") +
          " flex-col bg-[#191919] text-[#D2D2D2] px-4 pb-4 space-y-2 text-lg " +
          "md:flex md:flex-row md:items-center md:justify-evenly md:space-y-0 md:px-8 md:py-0"
        }
      >
        <Link to={"/"}>
          <li className="px-3 py-2 md:px-5 md:py-4 cursor-pointer hover:bg-[#0f0e0e] hover:underline rounded">
            Home
          </li>
        </Link>
        <Link to={"/products"}>
          <li className="px-3 py-2 md:px-5 md:py-4 cursor-pointer hover:bg-[#0f0e0e] hover:underline rounded">
            Products
          </li>
        </Link>
        <Link to={"/blogs"}>
          <li className="px-3 py-2 md:px-5 md:py-4 cursor-pointer hover:bg-[#0f0e0e] hover:underline rounded">
            Blogs
          </li>
        </Link>
        <Link to={"/about-us"}>
          <li className="px-3 py-2 md:px-5 md:py-4 cursor-pointer hover:bg-[#0f0e0e] hover:underline rounded">
            About Us
          </li>
        </Link>
        <Link to={"/contact-us"}>
          <li className="px-3 py-2 md:px-5 md:py-4 cursor-pointer hover:bg-[#0f0e0e] hover:underline rounded">
            Contact Us
          </li>
        </Link>
      </ul>
      <br />
      <br />
    </nav>
  );
};

export default Navbar;
