import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HeroSection = ({ movieHero }) => {
  // check mun doy sa pel render component movieHero=null (Async)
  if (!movieHero) return ;
  // console.log("state : ", movieHero);
  const {
    name: title,
    vote_average: rate,
    poster_path: img,
    first_air_date: date,
    backdrop_path:img_bg,
    overview,
  } = movieHero;
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${img_bg})`,
      }}
      className="relative h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-start"
    >
      {/* Overlay */}
      <div
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.3))",
        }}
        className="absolute inset-0 z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-12">
        <div className="w-full xs:w-3/4 sm:max-w-[600px] h-3/5 flex flex-col items-start gap-3">
          <button
            style={{ backgroundColor: "rgba(255,0,0,0.2)" }}
            className="border-2 border-red-500 px-5 py-1 rounded-3xl text-lg flex items-center gap-2 text-red-500 md:text-[24px]"
          >
            <Icon
              icon="material-symbols:star"
              className="w-4 h-4 xs:w-6 xs:h-6"
            />
            Featured Today
          </button>

          <p className="text-3xl font-bold text-white md:text-[34px]">
            {title}
          </p>

          <div className="text-[#D9D9D9] flex gap-3 md:text-[18px]">
            <span>{rate.toFixed(1)}</span>
            <span>{date}</span>
           
          </div>

          <p className="text-[#D9D9D9] md:text-[16px] md:h-42 overflow-hidden line-clamp-7">
            {overview}
          </p>

          <div className="w-full h-20 flex gap-2">
            <button
              className="text-[12px] xs:text-[14px] flex items-center gap-1 px-1 py-2 xs:gap-2 xs:px-2 xs:py-3  bg-red-500 rounded-xl text-white xs:font-bold border
                border-red-500 md:px-3 md:py-4 hover:-translate-y-0.5 transition-all duration-100 "
            >
              {/* {" "} */}
              <Icon icon="mdi:play" className="w-3 h-3 xs:w-6 xs:h-6" />
              Watch Now
            </button>
            <button
              className="text-[12px] xs:text-[14px] flex items-center gap-1 px-1 py-2 xs:gap-2 xs:px-2 xs:py-3 rounded-xl text-white xs:font-bold border
                border-white md:px-3 md:py-4 hover:-translate-y-0.5 transition-all duration-100 "
            >
              {/* {" "} */}
              <Icon icon="mdi:play" className="w-3 h-3 xs:w-6 xs:h-6" />
              Add To List
            </button>

          </div>
        </div>
      </div>
      {/* <img src={bg} className="z-10" alt="" /> */}
    </div>
  );
};

export default HeroSection;
