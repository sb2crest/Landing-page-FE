/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import bg_1 from "../assets/images/bg-1.jpg";
import bg_3 from "../assets/images/bg-3.jpg";
import bg_2 from "../assets/images/bg-2.jpg";

const slides = [
  {
    src: bg_1,
    alt: "image 1",
    title: "Innovative Solution",
    subtitle: "Empowering business with cutting-edge Technology",
    link: "https://www.seabed2crest.com/", // Updated URL
  },
  {
    src: bg_3,
    alt: "image 3",
    title: "Reliable Support",
    subtitle: "Anytime assistance to keep system running smoothly",
    link: "https://www.seabed2crest.com/", // Updated URL
  },
  {
    src: bg_2,
    alt: "image 3",
    title: "Seamless Integration",
    subtitle: "Connecting systems for optimal performance",
    link: "https://www.seabed2crest.com/", // Updated URL
  },
];

export function CarouselDefault() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
            <div className="relative flex items-center text-2xl mb-4">
              <div
                style={{
                  height: "2px",
                  width: "100px",
                  backgroundColor: "#E65100",
                }}
              />
              <h2 className="text-2xl font-bold mx-4 p-2">{slide.title}</h2>
              <div
                style={{
                  height: "2px",
                  width: "100px",
                  backgroundColor: "currentColor",
                }}
              />
            </div>
            <h1 className="text-5xl font-extrabold mb-6">
              <span className="text-orange-900">
                {slide.subtitle.split(" ")[0]}
              </span>
              <span> {slide.subtitle.split(" ").slice(1).join(" ")}</span>
            </h1>
            <a
              href={slide.link}
              className="mt-4 px-6 py-3 bg-orange-900 text-white text-lg font-semibold rounded hover:bg-orange-700 transition duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
