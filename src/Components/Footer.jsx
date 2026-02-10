import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="mt-12.5 container-s grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-12.5 lg:grid-cols-4 border-y border-gray-700 py-4 bg-gray-950">
        <div>
          <p className="text-red-500 font-bold text-lg md:text-2xl text-center mt-5 md:text-start">
            <span className="text-white">NHA </span>NHA
          </p>
          <p className="text-center text-[#D9D9D9] mt-4 md:text-start">
            Your ultimate destination for streaming movies and TV shows.
            Discover thousands of titles across all genres.
          </p>
          <ul className="text-[#D9D9D9] flex gap-4 justify-center md:justify-start mt-5">
            <li>
              <a className="link" href="#">
                <Icon icon="mingcute:facebook-fill" className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a className="link" href="#">
                <Icon icon="iconoir:tiktok-solid" className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a className="link" href="#">
                <Icon icon="ri:telegram-fill" className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a className="link" href="#">
                <Icon icon="uil:instagram" className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>

        <ul className="text-center md:text-start mt-5 flex flex-col gap-2">
          <li>
            <h1 className="text-white font-bold">Browse</h1>
          </li>
          <li className="text-[#D9D9D9]">Movie</li>
          <li className="text-[#D9D9D9]">TV Shows</li>
          <li className="text-[#D9D9D9]">New Releases</li>
          <li className="text-[#D9D9D9]">Coming soon</li>
        </ul>
        <ul className="text-center mt-5 flex flex-col gap-2 md:text-start">
          <li>
            <h1 className="text-white font-bold">Categories</h1>
          </li>
          <li className="text-[#D9D9D9]">Action</li>
          <li className="text-[#D9D9D9]">Comedy</li>
          <li className="text-[#D9D9D9]">Drama</li>
          <li className="text-[#D9D9D9]">Horror</li>
        </ul>
        <ul className="text-center mt-5 flex flex-col gap-2 md:text-start">
          <li>
            <h1 className="text-white font-bold">Help</h1>
          </li>
          <li className="text-[#D9D9D9]">FAQ</li>
          <li className="text-[#D9D9D9]">Contact Us</li>
          <li className="text-[#D9D9D9]">Term of Service</li>
          <li className="text-[#D9D9D9]">Privacy Policy</li>
        </ul>
      </div>
      <div className="container-s"></div>
    </>
  );
};

export default Footer;
