import { Icon } from "@iconify/react";
import { Search, Target } from "lucide-react";
import SearchResult from "./SearchResult";

import { useEffect, useState } from "react";

const SearchFill = ({ open }) => {
  const [seach, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // console.log("search", open);
  useEffect(() => {
    setSearch("");
  }, [open]);

  return (
    <div
      className={`fixed top-20 ${open ? "block" : "hidden"}   rounded-xl bg-black/80 backdrop-blur-sm outline-1 outline-white p-2 
        z-101 transition-all duration-300 m-auto pr-2 left-0 right-0 max-w-[350px]  md:hidden`}
    >
      <div className="flex">
        <input
          value={seach}
          className="bg-red-500 px-2 py-2 rounded-xl focus:outline-none w-full text-[14px] text-white "
          placeholder="SearchFill your favorite movie..."
          type="text"
          onChange={handleSearch}
        />
        <button className="bg-red-500 px-2 py-2 rounded-xl ml-2">
          <Icon icon="ic:round-search" width="24" height="24" color="white" />
        </button>
      </div>
      <SearchResult searchTitle={seach} />
    </div>
  );
};
export default SearchFill;
