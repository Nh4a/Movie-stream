import { Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import MoviePage from "../Page/MoviePage";
import MainLayout from "../Layout/MainLayout";
import MovieDetail from "../Page/MovieDetail";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/offer" element={<MoviePage />} />
        </Route>
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
};
export default MainRouter;
