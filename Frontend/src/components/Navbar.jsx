import React from "react";
import LoginBtn from "./Login/LoginBtn";
import SignupBtn from "./Sign-up/SignupBtn";
import nav from "../assets/nav.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between sticky top-0 w-full h-16 bg-white font-nerko">
      <div
        className="flex mx-16 gap-2 hover:cursor-pointer"
        onClick={handleLogoClick}
      >
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
          <Link to={"/"} className="hover:text-green-600" href="">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/herbs"} className="hover:text-green-600" href="">
            Browse Herbs
          </Link>
        </li>
        <li>
          <Link to={"/savedPlants"} className="hover:text-green-600" href="">
            Saved Plants
          </Link>
        </li>
        <li>
          <Link to={"/about"} className="hover:text-green-600" href="">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="">
            Contact
          </Link>
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
