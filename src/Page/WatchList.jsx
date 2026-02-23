import BottomBar from "../Components/BottomBar";
import NavigationBar from "../Components/NavigationBar";
import WatchListCard from "../Components/WatchListCard";
import { get_list, delete_from_list } from "../Utilities/listControl";
import { useState } from "react";

const WatchList = () => {
  const [movieInList, setMovieInList] = useState(() => get_list() || []);

  const handleDelete = (id) => {
    delete_from_list(id);
    const updated = get_list() || [];
    setMovieInList(updated);
  };
  return (
    <>
      <div className="w-full  bg-gray-900">
        <div className="container-s flex w-full justify-between mt-5 flex-col gap-4 mb-5 md:flex-row md:mt-10 p-4">
          <div className="text-white text-[24px] font-bold">My Watchlist</div>
          <div>
            {/* <button className="text-white text-[24px] px-2 py-1  border border-white rounded-xl hover:bg-red-500">
              Clear all
            </button> */}
          </div>
        </div>
      </div>
      <div className="container-s">
        <div className="mt-8 w-full h-auto grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {movieInList.length === 0 ? (
            <div className="text-white text-[18px] font-bold ">
              Your watchlist is empty.
            </div>
          ) : (
            movieInList.map((item) => (
              <WatchListCard
                key={item.id}
                movie={item}
                onDelete={handleDelete}
              />
            ))
          )}
          {/* <div className="bg-red-300 h-100"></div> */}
        </div>
      </div>
      {movieInList.length > 0 && (
        <div className=" bg-gray-900 w-full">
          <h1 className="container-s mt-5 py-5 text-red-500 text-[24px] font-bold">
            Movies in Watchlist :{" "}
            <span className="text-red-500"> {movieInList.length}</span>
          </h1>
        </div>
      )}
      {/* <div className=" bg-gray-900 w-full">
        <h1 className="container-s mt-5 py-5 text-red-500 text-[24px] font-bold">
          Movies in Watchlist :{" "}
          <span className="text-red-500"> {movieInList.length}</span>
        </h1>
      </div> */}
      <div className="h-10"></div>
      <BottomBar />
    </>
  );
};
export default WatchList;
