import { Navigation } from "lucide-react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";

const MainLayout = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
