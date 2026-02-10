import { Icon } from "@iconify/react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ movie }) => {
  const navigate =  useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const {
    name: titel,
    vote_average: rate,
    poster_path: img,
    first_air_date: date,
  } = movie;
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-900 h-100 rounded-xl overflow-hidden relative card"
  
    >
      <Link
        to={`/detail/${movie.id}`}
      >
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
        className="bg-white"
      ></div>
      <div className="p-4">
        <p className="text-[16px] truncate text-white w-full">{titel}</p>
        <p className="text-[12px] truncate mt-1 text-[#D9D9D9] w-full">
          {date}
        </p>
      </div>
      </Link>

    </div>
  );
};

export default Card;
