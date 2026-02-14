import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sMovies, setSmovies] = useState([]);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjlkYWFmYjY3NzM4ZjMwOGZhMDAyN2RhMmNkZWFjNiIsIm5iZiI6MTc2NjU1MDg0OS41NjMsInN1YiI6IjY5NGI2ZDQxNTdkNDhkY2VmMWIxZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YMX57dQ5c7UjzSluXJ0BBfbl2GdzbWdNZBhyPHqHrmk",
      },
    };
    const url =
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc";
    async function fetchData() {
      try {
        const res = await axios.get(url, options);
        const data = res.data.results;
        const sMovie = data.slice(3, 9);
        setSmovies(sMovie);
        const findm = data.find((item) => item.id === parseInt(id));
        setMovie(findm);
      } catch (er) {
        console.log(er);
      }
    }

    fetchData();
  }, []);
  function back() {
    window.history > 1 ? navigate("/") : navigate(-1);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="border-y-2 border-white my-4  py-2 bg-black sticky top-0">
        <div className="container-s">
          <button
            onClick={back}
            className=" px-4 py-2 border-2 border-white rounded-3xl"
          >
            <Icon
              icon="weui:back-filled"
              width="18"
              height="30"
              style={{ color: "white" }}
            />
          </button>
        </div>
      </div>
      <div className="container-s  h-screen  ">
        <div className="hidden md:block h-5 "></div>
        <div
          className=" flex flex-col gap-5 md:flex-row  md:py-4  md:border-2 border-red-500  
                      rounded-3xl max-w-260 m-auto  "
        >
          <div className="w-full md:w-180 md:my-auto lg:w-200 px-3 ">
            <img
              className="w-full rounded-2xl border border-red-500 m-auto"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 md:justify-center">
            <h1 className="text-center text-white text-3xl font-bold md:text-start lg:text-5xl">
              {movie.name}
            </h1>
            <div className="text-[#D9D9D9] flex gap-3 justify-center md:justify-start md:text-[18px]">
              <span>{1.2}</span>
              <span>01-01-20</span>
            </div>
            <p
              className="text-center text-[#D9D9D9] md:text-[16px] 
                        md:hauto   md:text-start"
            >
              {movie.overview}
            </p>
            <div className="flex justify-around md:justify-start md:gap-4 ">
              <button
                className="text-[12px] xs:text-[14px] flex items-center gap-1 px-1 py-2 xs:gap-2 xs:px-2 xs:py-3  bg-red-500 rounded-xl text-white xs:font-bold border
                        border-red-500 md:px-3 md:py-4 hover:-translate-y-0.5 transition-all duration-100 "
              >
                {/* {" "} */}
                <Icon icon="mdi:play" className="w-3 h-3 xs:w-6 xs:h-6" />
                Watch Now
              </button>


            </div>
          </div>
        </div>
        {/* <div className="w-full flex justify-between items-center mt-4">
          <h1 className="text-white text-[24px] font-bold">
            You May Also Like
          </h1>
          <div className="text-[#D9D9D9] text-[18px]">
            <Link className="flex" to={"/movie"}>
              View All
              <Icon
                icon="iconamoon:arrow-right-2"
                className="w-4 h-4 xs:w-6 xs:h-6"
              />
            </Link>
          </div>
        </div> */}
        {/* <div className="mt-8 w-full h-auto grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {sMovies.map((item, index) => (
            <Card key={item.id} movie={item} />
          ))}
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default MovieDetail;
