import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('./src/assets/abc.png')] font-nerko bg-no-repeat bg-cover h-[25rem] py-16 flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to Your{" "}
          <span className="text-green-800">Virtual Herbal Garden!</span>
        </h1>
        <p className="mt-4 text-lg text-white font-bold">
          Explore plants, clans, and grow your herbal knowledge from anywhere.
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg">
            Explore the Garden
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
