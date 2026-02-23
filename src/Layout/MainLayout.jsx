import { CloudSnow, Navigation } from "lucide-react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import BottomBar from "../Components/BottomBar";
import { act, useState } from "react";
import SearchFill from "../Components/SearchFill";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const [active, setActive] = useState(false);

  function showSearch() {
    setActive(!active);
    console.log("active state", active);
    if (!active) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
  return (
    <>
      <SearchFill open={active} />

      <NavigationBar />
      <div>
        <Outlet />
      </div>
      <BottomBar show={showSearch} />
      <div>
      </div>
    </>
  );
};

export default MainLayout;
