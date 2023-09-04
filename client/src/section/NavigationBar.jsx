import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white text-sm md:text-base lg:text-lg xl:text-xl  p-6 fixed w-full flex-wrap top-0 z-10">
      <ul className="flex justify-center font-bold gap-10 md:gap-20 lg:gap-20 ">
        <li className="hover:text-green-200 hover:underline decoration-wavy decoration-cyan-400">
          <Link to="/#about">About</Link>
        </li>
        <li className="hover:text-green-200 hover:underline decoration-wavy decoration-cyan-400">
          <Link to="/#projects">Projects</Link>
        </li>
        <li className="hover:text-green-200 hover:underline decoration-wavy decoration-cyan-400">
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
