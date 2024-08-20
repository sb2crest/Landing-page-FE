/* eslint-disable no-unused-vars */
import React from "react";
import web from "../assets/images/web.jpg";
import digital from "../assets/images/digital.jpg";
import product from "../assets/images/product.jpg";

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading section */}
      <div className="text-center pt-8">
        {" "}
        {/* Reduced padding */}
        <p className="text-md font-bold">What we do</p>
        <p className="text-4xl font-bold text-orange-900">
          WE PROVIDE SERVICES
        </p>
      </div>
      <div className="flex items-center justify-evenly w-full -mt-20">
        {/* service-1 */}
        <div className="relative flex flex-col justify-center overflow-hidden">
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={web}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-500 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* service-2 */}
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={digital}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* service-3 */}
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
          <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={product}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
