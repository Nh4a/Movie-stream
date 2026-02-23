import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
const WatchListCard = ({ movie, onDelete }) => {
  const {
    name: titel,
    vote_average: rate,
    poster_path: img,
    first_air_date: date,
  } = movie;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in-right"
        className="bg-gray-900 h-110 rounded-xl overflow-hidden relative  transition-all  hover:-translate-y-1 card"
      >
        <Link to={`/detail/${movie.id}`}>
          <span
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="text-white absolute p-2 bg rounded-xl text-[12px] right-2 top-2 flex items-center gap-1"
          >
            <Icon icon="emojione:star" width="14" height="14" />
            {rate.toFixed(1)}
          </span>
          <div
            style={{
              width: "100%",
              height: "325px",
              backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + img})`,
            }}
            className="bg-white bg-center bg-cover"
          ></div>
          <div className="p-4">
            <p className="text-[16px] truncate text-white w-full">{titel}</p>
            <p className="text-[12px] truncate mt-1 text-[#D9D9D9] w-full">
              {date}
            </p>
          </div>
        </Link>
        <button
          onClick={() => onDelete && onDelete(movie.id)}
          className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm w-full mt-2 mb-2"
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default WatchListCard;
