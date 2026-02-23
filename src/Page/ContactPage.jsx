import { Icon } from "@iconify/react";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-4 px-5  container-s">
      {/* header */}
      <div className=" flex flex-col gap-3">
        <h1 className="text-white font-bold text-center text-3xl font-bold text-white md:text-[34px]">
          Get in touch
        </h1>
        <p className="text-white text-center">
          Have questions about our streaming service? Want to report a bug or
          suggest a feature? We'd love to hear from you!
        </p>
      </div>
      {/* contact */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-4 mt-7 ">
          <div className="h-40 bg-gray-900 p-5 rounded-3xl grid grid-rows-3">
            <p className="text-[18px] font-bold text-red-500">Email</p>
            <p className="text-[14px] ml-5 text-white">panhay696@gmail.com</p>
            <p className="text-[14px] ml-5 text-white">
              We'll respond within 24 hours
            </p>
          </div>
          <div className="h-40 bg-gray-900 p-5 rounded-3xl grid grid-rows-3">
            <p className="text-[18px] font-bold text-red-500">Phone</p>
            <p className="text-[14px] ml-5 text-white">0987654321</p>
            <p className="text-[14px] ml-5 text-white">
              Monday - Friday, 9 AM - 6 PM EST
            </p>
          </div>
          <div className="h-40 bg-gray-900 p-5 rounded-3xl grid grid-rows-3">
            <p className="text-[18px] font-bold text-red-500 ">Address</p>
            <p className="text-[14px] ml-5 text-white">Kampong cham</p>
          </div>
          <div className="h-auto bg-gray-900 p-5 rounded-3xl grid grid-rows-3">
            <p className="text-[18px] font-bold text-red-500">Follow us</p>
            <p className="text-[14px] ml-5 text-white">
              Connect with us on social media for updates and exclusive content
            </p>
            <ul className="text-[#D9D9D9] flex flex-wrap gap-4 justify-center md:justify-start mt-5 m-auto">
              <li>
                <a className="link" href="#">
                  <Icon icon="mingcute:facebook-fill" className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  <Icon icon="iconoir:tiktok-solid" className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8 " />
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  <Icon icon="ri:telegram-fill" className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  <Icon icon="uil:instagram" className="w-4 h-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* form  */}
        <div className=" flex flex-col  bg-gray-900  rounded-3xl p-5 gap-7 mt-6">
          <div className="flex flex-col">
            <label className="text-red-500 block" htmlFor="name">
              Name
            </label>
            <input
              className=" border-2 border-white text-white  mt-2 px-2 py-2 rounded-xl md:px-3 md:py-3 lg:px-4 lg:py-4"
              id="name"
              type="text"
              placeholder="Enter name..."
            />
          </div>
          <div className="flex flex-col">
            <label className="text-red-500 block" htmlFor="Email">
              Email
            </label>
            <input
              className="border-2 border-white text-white  mt-2 px-2 py-2 rounded-xl md:px-3 md:py-3 lg:px-4 lg:py-4"
              id="Email"
              type="emial"
              placeholder="Enter email..."
            />
          </div>
          <div className="flex flex-col">
            <label className="text-red-500 block" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              placeholder="Message..."
              rows={12}
              className=" border-2 border-white text-white  mt-2 px-6 py-2 rounded-xl md:px-3 md:py-3 lg:px-4 lg:py-4" 
            ></textarea>
          </div>
          <div className="flex justify-end ">
            <button className="w-full px-8 py-2 text-white border-2 border-red-500 bg-red-400 font-bold rounded-xl md:px-3 md:py-3 lg:px-4 lg:py-4">
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactPage;
