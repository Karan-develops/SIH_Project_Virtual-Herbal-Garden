import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import HerbCards from "./HerbCards.jsx";

const BrowseHerbs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="h-[100vh]">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mb-2 font-nerko mt-5">
            🌿Browse Different Herbs🌿
          </h1>
        </div>
        <div className="flex justify-center">
          <input
            className="bg-black text-white h-10 w-[55vw] font-nerko mt-10 rounded-full p-6"
            type="text"
            placeholder="Search Any Herb of Your Choice"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <HerbCards searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default BrowseHerbs;
