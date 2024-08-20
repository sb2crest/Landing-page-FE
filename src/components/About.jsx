// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="text-4xl font-bold">
        {" "}
        Innovating Digital Solutions.{" "}
        <span className="text-[#E65100]">Let Us Elevate Your Success.</span>
      </div>
      <div className="text-[22px] p-8 text-center">
        At SeaBed2Crest, we ignite digital transformation with innovative IT
        services, web development, and digital marketing solutions. As a
        forward-thinking startup, we are dedicated to propelling your business
        forward with cutting-edge strategies, creative content, and personalized
        support. Our mission is to empower your brand with exceptional online
        presence, leveraging the latest technology to drive growth and success
        in the digital landscape. Let us turn your vision into reality, and
        together, we will chart a course for digital excellence and enduring
        success.
      </div>
      <div className="p-6 text-[20px] text-center">
        {" "}
        Want to Boost your digital success.
        <span>
          {" "}
          <a href="#contact" className="hover:underline text-[#E65100]">
            Contact us
          </a>
        </span>{" "}
        today!
      </div>
    </div>
  );
};

export default About;
