import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/authSlice";
import { useEffect } from "react";

const Header = () => {
  //dispatch
  const dispatch = useDispatch();
  //useSelector
  const user = useSelector((state) => state.auth.user);
  //useEffect
  useEffect(() => {
    // console.log(user);
  }, [user]);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="relative z-10">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3 sm:justify-between sm:px-6 md:px-10 lg:px-12 md:py-6 lg:py-12">
        <Link to={"/"}>
          <img
            className="h-10 w-32 sm:h-12 sm:w-40 md:h-14 md:w-52 lg:h-16 lg:w-76 cursor-pointerh border-white"
            src={logo}
            alt="Scrap Yard"
          />
        </Link>
        {/* Buttons */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full justify-center sm:w-auto sm:justify-end">
          {/* consitional Rendering */}
          {!user ? (
            <>
              <Link to={"/register"}>
                <button className="px-3 py-2 text-xs sm:text-sm md:text-base text-black bg-white rounded border cursor-pointer hover:underline">
                  Register
                </button>
              </Link>
              <Link to={"/login"}>
                <button className="px-3 py-2 text-xs sm:text-sm md:text-base text-black bg-white rounded border cursor-pointer hover:underline">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/my-account"}>
                <button className="px-3 py-2 text-xs sm:text-sm md:text-base text-black bg-white rounded border cursor-pointer hover:underline">
                  My Account
                </button>
              </Link>
              <Link to={"/"}>
                <button
                  onClick={handleLogOut}
                  className="px-3 py-2 text-xs sm:text-sm md:text-base text-black bg-white rounded border cursor-pointer hover:underline"
                >
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Navbar */}
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
