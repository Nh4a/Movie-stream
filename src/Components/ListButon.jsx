import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const ListButton = ({ list_coount }) => {
  const navigate = useNavigate();
  list_coount > 9 ? (list_coount = "9+") : list_coount;
  return (
    <button onClick={()=> {navigate("/watchlist")}} className="relative p-1 md:p-2 font-bold text-white  rounded-xl border-2 border-red-500 hover:bg-white hover:text-red-500 transition-all">
      {list_coount !== 0 && (
        <span
          className={`${list_coount > 9 ? "p-1" : "p-2"} absolute -top-[25%] -left-[25%] rounded-xl text-sm py-0 bg-red-500 text-white`}
        >
          {list_coount}
        </span>
      )}
      <Icon icon="ri:movie-fill" width="24" height="24" />
    </button>
  );
};
export default ListButton;
