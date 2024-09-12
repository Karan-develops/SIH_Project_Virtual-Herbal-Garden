import React from "react";

const LogoutBtn = () => {
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-white text-green-600 text-xl p-2 w-24 border-none rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutBtn;
