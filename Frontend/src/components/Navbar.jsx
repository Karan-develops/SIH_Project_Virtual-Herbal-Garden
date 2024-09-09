import React from "react";
import LoginBtn from "./Login/LoginBtn";
import SignupBtn from "./Sign-up/SignupBtn";
import nav from "../assets/nav.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-16 bg-white font-nerko">
      <div className="flex mx-16 gap-2">
        <div>
          <img src={nav} alt="nav" className="w-10 h-10 mt-2 spin-image" />
        </div>
        <div className="flex flex-col text-center text-xl">
          <span className=" font-bold">Virtual</span>
          <span className="text-green-600 font-bold">Garden</span>
        </div>
      </div>

      <ul className="flex font-bold items-center gap-10 text-xl">
        <li>
          <a className="hover:text-green-600" href="">Home</a>
        </li>
        <li>
          <a className="hover:text-green-600" href="">Virtual Tour</a>
        </li>
        <li>
          <a className="hover:text-green-600" href="">Blog</a>
        </li>
        <li>
          <a className="hover:text-green-600" href="">About</a>
        </li>
        <li>
          <a className="hover:text-green-600" href="">Contact</a>
        </li>
      </ul>
      <div className="flex">
        <SignupBtn />
        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
