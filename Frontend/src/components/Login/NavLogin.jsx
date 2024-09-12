import React from "react";
import nav from "../../assets/nav.jpeg";
import { useNavigate } from "react-router-dom";

const NavLogin = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center w-full h-16 bg-[#ffffffde] font-nerko">
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
    </div>
  );
};

export default NavLogin;
