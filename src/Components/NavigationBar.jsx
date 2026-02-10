import { Search } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav style={{ zIndex: 100 }} className="w-full bg-black sticky top-0 ">
        <div className="container-s h-20   flex items-center justify-between p-3 ">
          <div className="">
            <p className="text-red-500 font-bold text-lg md:text-2xl">
              <span className="text-white">NHA </span>NHA
            </p>
          </div>
          <div className="hidden md:block w-60 lg:w-80 ">
            <ul className="flex justify-between font-bold text-gray-300">
              <li className={location.pathname === "/" ? "text-red-500" : ""}>
                <Link to={"/"}>HOME</Link>
              </li>

              {/* to={"/movie"} */}
              <li
                className={location.pathname === "/movie" ? "text-red-500" : ""}
              >
                <Link to={"/movie"} className="hover:text-white">
                  MOVIE
                </Link>
              </li>
              <li
                className={location.pathname === "/offer" ? "text-red-500" : ""}
              >
                <Link to={"/offer"} className="hover:text-white">
                  OFFERS
                </Link>
              </li>
            </ul>
          </div>
          {/* navigate hea=re */}

          <div className="flex gap-2 items-center ">
            <div>
              <input
                className="hidden md:block rounded-xl bg-white py-2 w-[250px] self-end"
                placeholder="Search your favorite movie..."
                type="text"
              />
            </div>
            <div>
              <button className="bg-red-500 py-2 font-bold text-white px-4 rounded-xl border-2 border-red-500 hover:bg-white hover:text-red-500 transition-all">
                Sign in
              </button>
            </div>
          </div>

         
        </div>
      </nav>
    </>
  );
};
export default NavigationBar;
