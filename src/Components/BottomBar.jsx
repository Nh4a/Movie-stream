// import { FaSearch } from "react-icons/fa";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const BottomBar = () => {
  const location = useLocation();
  return (
    <div className=" px-4 w-full  items-center bg-black fixed bottom-0 md:hidden z-100">
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
        <li className={location.pathname === "/movie" ? "text-red-500" : ""}>
          <Link to={"/movie"} className="hover:text-white ">
            OFFERS
          </Link>
        </li>
        <li>
          <Link className="hover:text-white ">
            <Search size={24} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default BottomBar;
