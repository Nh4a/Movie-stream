import { Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SearchFill from "./SearchFill";
import { useState } from "react";
const BottomBar = ({ show }) => {
  const location = useLocation();
  return (
    <>
      <div className="z-1000"></div>
      <div className=" px-4 w-full  items-center bg-black fixed bottom-0 md:hidden z-10">
        <ul className="flex items-center justify-between font-bold text-gray-300 h-10 pr-10 sm:w-100 mx-auto">
          <li className={location.pathname === "/" ? "text-red-500" : ""}>
            <Link to={"/"} className="hover:text-white ">
              HOME
            </Link>
          </li>
          <li className={location.pathname === "/movie" ? "text-red-500" : ""}>
            <Link to={"/movie"} className="hover:text-white">
              MOVIE
            </Link>
          </li>
          <li
            className={location.pathname === "/contact" ? "text-red-500" : ""}
          >
            <Link to={"/contact"} className="hover:text-white ">
              Contact
            </Link>
          </li>
          <li>
            <button type="button" onClick={show} className="hover:text-white">
              <Search size={24} />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export default BottomBar;
