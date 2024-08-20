/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import logo from "../assets/images/seabed2crest-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Services", path: "/services" },
    { link: "About", path: "/about" },
    { link: "Product", path: "/product" },
    { link: "Testimonial", path: "/testimonial" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`w-full bg-white shadow-md fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out z-50 ${
        isSticky ? "shadow-lg" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center text-base gap-8 md:gap-16">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="Logo" className="w-14 inline-block" />
          </a>
          {/* nav items for large devices */}
          <ul className="md:flex space-x-8 hidden">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-black hover:text-gray-600">
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            {/* Add a menu icon here */}
            <span>☰</span>
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute top-16 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col space-y-4 px-4 py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-black hover:text-gray-600"
                  onClick={toggleMenu} // Close menu on item click
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
