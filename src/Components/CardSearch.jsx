import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const CardSearch = ({name, vote_average, first_air_date, poster_path, id}) => {
  const navigate = useNavigate();
  return (
    <div className="h-20  w-full p-1 flex gap-2 border-b-2  border-gray-500 hover:bg-gray-500/50 " onClick={() => navigate(`/detail/${id}`)}>
      <img
        className="h-[100%] outline-1 outline-white"
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt=""
      />
      <div className="grid grid-rows-3">
        <p className="text-md font-bold text-white line-clamp-1">{name}</p>
        <p className=" text-white flex items-center gap-2">
          <Icon icon="emojione:star" width="14" height="14" />
          {vote_average.toFixed(1)}
        </p>
        <p className="text-white">{first_air_date}</p>
      </div>
    </div>
  );
};
export default CardSearch;
