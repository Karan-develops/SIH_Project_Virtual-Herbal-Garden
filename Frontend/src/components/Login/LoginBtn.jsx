import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBtn = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/login");
  };
  return (
    <div className="p-3">
      <button
        onClick={handleButtonClick}
        className="bg-green-500 text-white text-xl p-1 w-28 border-none rounded-lg hover:bg-green-700"
      >
        Login
      </button>
    </div>
  );
};

export default LoginBtn;
