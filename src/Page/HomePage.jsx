import { Link, useLocation } from "react-router-dom";
import BottomBar from "../Components/BottomBar";
import HeroSection from "../Components/HeroSection";
import NavigationBar from "../Components/NavigationBar";
import { Icon } from "@iconify/react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  let index = null;
  let trandingMovie = [];
  let movieHero = null;
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
      const res = await axios.get(url, options);
      setMovies(res.data.results);
      console.log("hu", res.data.results);
    }
    fetchData();
  }, []);  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movies]);
  trandingMovie = movies.slice(0, 6);
  movieHero = movies[Math.floor(Math.random() * 20)];
  console.log("hello home page");
  return (
    <div>
      <HeroSection movieHero={movieHero} />
      <div className="container-s h-25">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-white text-[24px] font-bold">Trending Now</h1>
          <div className="text-[#D9D9D9] text-[18px]">
            <Link className="flex" to={"/movie"}>
              View All
              <Icon
                icon="iconamoon:arrow-right-2"
                className="w-4 h-4 xs:w-6 xs:h-6"
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 w-full h-auto grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {trandingMovie.map((item, index) => (
            <Card key={item.id} movie={item} />
          ))}
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <h1 className="text-white text-[24px] font-bold">Top Rate</h1>
          <div className="text-[#D9D9D9] text-[18px]">
            <Link className="flex" to={"/movie"}>
              View All
              <Icon
                icon="iconamoon:arrow-right-2"
                className="w-4 h-4 xs:w-6 xs:h-6"
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 w-full h-auto grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {trandingMovie.map((item, index) => (
            <Card key={item.id} movie={item} />
          ))}
        </div>
        <Footer />
        <div className="h-150"></div>
      </div>
      <BottomBar />
    </div>
  );
};
export default HomePage;
