// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/images/seabed2crest-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-0">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.seabed2crest.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-20" alt="Logo" />
          </a>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[#E65100] text-2xl italic font-semibold">
              Expand your Digital Experience{" "}
              <span className="text-black"> with our amazing Team!</span>
            </span>
            <a href="#contact">
              <button className="bg-[#E65100] text-white uppercase py-2 px-5 rounded-sm shadow focus:outline-none w-40 hover:bg-orange-700">
                Contact Us
              </button>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <span> </span>
          <a href="https://www.seabed2crest.com/" className="hover:underline">
            Seabed2crest Technologies
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
