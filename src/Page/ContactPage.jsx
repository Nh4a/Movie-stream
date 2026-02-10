import { Icon } from "@iconify/react";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-4 px-5">
      {/* header */}
      <div className="container-s flex flex-col gap-3">
        <h1 className="text-white font-bold text-center text-3xl font-bold text-white md:text-[34px]">
          Get in touch
        </h1>
        <p className="text-white text-center">
          Have questions about our streaming service? Want to report a bug or
          suggest a feature? We'd love to hear from you!
        </p>
      </div>
      {/* contact */}
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
      </div>
      {/* form  */}
      <div className=" flex flex-col  bg-gray-900  rounded-3xl p-5 gap-7">
        <div>
          <label className="text-red-500" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-white text-white ml-5 mt-2 px-2 py-2 rounded-xl"
            id="name"
            type="text"
            placeholder="Enter name..."
          />
        </div>
        <div>
          <label className="text-red-500" htmlFor="Email">
            Email
          </label>
          <input
            className="border-2 border-white text-white ml-5 mt-2 px-2 py-2 rounded-xl"
            id="Email"
            type="emial"
            placeholder="Enter email..."
          />
        </div>
        <div className="">
          <label className="text-red-500" htmlFor="msg">
            Message
          </label>
          <textarea
            id="msg"
            rows={6}
            className="border-2 border-white text-white ml-5 mt-2 px-6 py-2 rounded-xl"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="px-8 py-2 text-red-500 border-2 border-red-500 font-bold rounded-xl">Send</button>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
