import { Icon } from "@iconify/react";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchResult from "./SearchResult";
import ListButton from "./ListButon";
import { get_list } from "../Utilities/listControl";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [open, result] = useState(false);

  const [w_list, setw_List] = useState(get_list() || []);
  useEffect(() => {
    const handleWatchlistChange = () => {
      setw_List(get_list() || []);
    };
    window.addEventListener("watchlistChanged", handleWatchlistChange);
    return () =>
      window.removeEventListener("watchlistChanged", handleWatchlistChange);
  }, []);
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
                className={
                  location.pathname === "/contact" ? "text-red-500" : ""
                }
              >
                <Link to={"/contact"} className="hover:text-white ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* navigate hea=re */}

          <div className="flex gap-2 items-center ">
            <div className="relative hidden md:flex border-2 border-gray-500 rounded-xl ">
              <input
                className="hidden md:block rounded-xl text-white placeholder:text-gray-400 placeholder:text-[11px] placeholder:font-bold 
                  py-2 px-1 self-end text-[16px] forcus:outline-none focus:border-none"
                placeholder="Search your favorite movie..."
                type="text"
                value={search}
                onChange={handleSearch}
              />
              <span className="py-1 px-3 text-white flex items-center ">
                <Icon
                  icon="ic:round-search"
                  width="24"
                  height="24"
                  color="white"
                />
              </span>
              {/* result */}
              {search && (
                <div className="absolute top-12 w-70 h-60 rounded-lg bg-black/80 backdrop-blur-sm outline-1 outline-white p-2">
                  <SearchResult searchTitle={search} />
                </div>
              )}
            </div>
            <div>
              <button className=" p-1 md:p-2 font-bold text-white  rounded-xl border-2 border-red-500 hover:bg-white hover:text-red-500 transition-all">
                <Icon icon="line-md:account" width="24" height="24" />
              </button>
            </div>
            <div className="hidden md:block">
              <ListButton list_coount={w_list.length} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavigationBar;
