import { useEffect, useState } from "react";
import BottomBar from "../Components/BottomBar";
import HeroSection from "../Components/HeroSection";
import NavigationBar from "../Components/NavigationBar";
import axios from "axios";
import Card from "../Components/Card";

const MoviePage = () => {
  const [sortDesc_, setSortDesc_] = useState(false);

  const [movies, setMovies] = useState([]);
  // let m;
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
        setMovies(res.data.results);
       
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  let DefauultMovie;
  const sortDesc = () => {
    const sorted = [...movies].sort((a, b) => b.vote_average - a.vote_average);
    setMovies(sorted);
  };
  const defaulltM = () => {
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
    async function fetchD() {
      const res = await axios.get(url, options);
      setMovies(res.data.results)  
    }
    fetchD();
  };
  const sortAsc = () => {
    const sorted = [...movies].sort((a, b) => a.vote_average - b.vote_average);
    setMovies(sorted);
  };

  return (
    <>
      <HeroSection />
      <div className="container-s">
        <div
          style={{ backgroundColor: `rgba(148, 148, 148,0.1)` }}
          className="w-full  h-auto py-5 px-2 text-white grid grid-cols-1 rounded-xl gap-2 sm:grid-cols-3 md:sm:grid-cols-8"
        >
          <button
            onClick={defaulltM}
            style={{ backgroundColor: `rgba(148, 148, 148,0.1)` }}
            className="border-1 border-white h-10 rounded-xl "
          >
            All Movie
          </button>
          <button
            style={{ backgroundColor: `rgba(148, 148, 148,0.1)` }}
            className="border-1 border-white h-10 rounded-xl "
            onClick={sortDesc}
          >
            Sort Z-A
          </button>
          <button
            onClick={sortAsc}
            style={{ backgroundColor: `rgba(148, 148, 148,0.1)` }}
            className="border-1 border-white h-10 rounded-xl "
          >
            Sort A-Z
          </button>
        </div>
        <h1 className="text-white text-[24px] font-bold">Trending Now</h1>
        <div className="mt-8 w-full h-auto grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((item, index) => (
            <Card key={item.id} movie={item} />
          ))}
        </div>
      </div>
      <BottomBar />
    </>
  );
};
export default MoviePage;
