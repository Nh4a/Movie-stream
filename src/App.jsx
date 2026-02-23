import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainRouter from "./Router/MainRouter";
import MainLayout from "./Layout/MainLayout";
import MovieDetail from "./Page/MovieDetail";
import NavigationBar from "./Components/NavigationBar";
import ContactPage from "./Page/ContactPage";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import WatchList from "./Page/WatchList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavigationBar /> */}
      <MainRouter />
      {/* <WatchList /> */}

      {/* <ContactPage /> */}
      {/* <MovieDetail /> */}
    </>
  );
}

export default App;
