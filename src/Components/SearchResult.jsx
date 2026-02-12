import { Icon } from "@iconify/react";
import axios from "axios";
import { use, useEffect, useState } from "react";
import CardSearch from "./CardSearch";

const SearchResult = ({ searchTitle }) => {
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
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options,
      )
      .then((res) => {
        setMovie(res.data.results);
      });
  }, []);
  let searchResults = [];
  searchResults = movie.filter((item) =>
    item.name.toLowerCase().includes(searchTitle.toLowerCase()),
  );
  console.log("search result", searchResults);
  console.log("search title", searchTitle);
  return (
    <div className="w-full h-50 mb-2 p-1 overflow-x-auto  grid grid-rows-auto gap-2 mt-2 ">
      {/* card */}
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
          <CardSearch
            key={item.id}
            name={item.name}
            vote_average={item.vote_average}
            first_air_date={item.first_air_date}
            poster_path={item.poster_path}
          />
        ))
      ) : (
        <p className="text-white text-center my-auto text-2xl font-bold">No results found</p>
      )}

      <div className="w-[50%] h-2 bg-gray-500 rounded-xl m-auto"></div>
    </div>
  );
};

export default SearchResult;
