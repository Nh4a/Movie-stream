import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import MoviePage from "../Page/MoviePage";
import MainLayout from "../Layout/MainLayout";
import MovieDetail from "../Page/MovieDetail";
import ContactPage from "../Page/ContactPage";
import WatchList from "../Page/WatchList";

const MainRouter = () => {
  // localStorage.removeItem("movie");
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Route>
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};
export default MainRouter;
