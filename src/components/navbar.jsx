import React, { useState } from "react";
import sonu from "../../public/sonu.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-18 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="flex justify-between items-center h-full md:mr-20">
        {/* Logo Section */}
        <div className="flex items-center py-1">
          <img
            src={sonu}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
          />
          <h1 className="font-semibold text-xl text-white cursor-pointer mx-3">
            Taiya<span className="text-yellow-300 text-2xl">b</span>
            <p className="text-sm text-gray-200">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div>
          <ul className="hidden md:flex justify-start space-x-8 text-white font-medium">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer hover:text-yellow-300"
                key={id}
              >
                 <button
              type="submit"
              className="w-[80px] text-white py-1 px-0 rounded-lg hover:bg-pink-700 transition duration-300"
            >
                              <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
            </button>

              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div
            onClick={() => setMenu(!menu)}
            className="md:hidden text-white cursor-pointer"
          >
            {menu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <ul className="flex flex-col h-screen items-start pl-10 space-y-6 text-white font-semibold items-center justify-center">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer text-xl"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
