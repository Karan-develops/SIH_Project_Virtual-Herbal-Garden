import React from "react";
import HomeCards from "../HomeCards.jsx";
import a from "/src/assets/b.png";

const BrowseHerbs = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-2 font-nerko mt-5">
        🌿Browse Different Herbs🌿
        </h1>
      </div>
      <div className="flex justify-center">
        <input className="bg-black text-white h-10 w-[55vw] font-nerko mt-10 rounded-full p-6" type="text" placeholder="Search Any Herb of Your Choice" />
      </div>
      <div className="flex flex-wrap">
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      <HomeCards content="Search Your Herb" pic={a}/>
      </div>
    </div>
  );
};

export default BrowseHerbs;
