import React, { useEffect, useState } from "react";
import flower from "../../assets/flower.jpeg";
import Navbar from "../Navbar";

const SavedPlants = () => {
  const [savedPlants, setSavedPlants] = useState([]);

  useEffect(() => {
    const plants = JSON.parse(localStorage.getItem("savedPlants")) || [];
    setSavedPlants(plants);
  }, []);
  const removePlant = (id) => {
    const updatedPlants = savedPlants.filter((plant) => plant.id !== id);
    setSavedPlants(updatedPlants);
    localStorage.setItem("savedPlants", JSON.stringify(updatedPlants));
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 mt-6 p-5 font-nerko text-center">
        🌱 Your Saved Plants 🌱
      </h1>
      <div className="flex flex-wrap justify-around m-16 gap-12">
        {savedPlants.length > 0 ? (
          savedPlants.map((plant, index) => (
            <div key={index} className="image-container font-nerko">
              <img
                className="flower-image"
                src={plant.image_url || flower}
                alt={plant.common_name || "Plant Image"}
              />
              <div className="flower-info">
                <h3 className="flower-name">
                  {plant.common_name || "Unknown Plant"}
                </h3>
                <p className="flower-scientific-name">
                  {plant.scientific_name || "Scientific Name Not Available"}
                </p>
                <button
                  onClick={() => removePlant(plant.id)}
                  className="bg-red-500 text-white p-2 rounded mt-2"
                >
                  Remove Plant
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            No plants saved yet. Start saving your favorite plants!
          </p>
        )}
      </div>
    </div>
  );
};

export default SavedPlants;
