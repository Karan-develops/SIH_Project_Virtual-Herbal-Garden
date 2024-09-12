import React, { useEffect, useState } from "react";
import flower from "../../assets/flower.jpeg";
import Navbar from "../Navbar";
import "./SavedPlants.css";

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
      <h1 className="title">🌱 Your Saved Plants 🌱</h1>
      <div className="plants-container">
        {savedPlants.length > 0 ? (
          savedPlants.map((plant, index) => (
            <div key={index} className="plant-card">
              <img
                className="plant-image"
                src={plant?.image_url || flower}
                alt={plant?.common_name || "Plant Image"}
              />
              <div className="plant-info">
                <h3 className="plant-name">
                  {plant?.common_name || "Unknown Plant"}
                </h3>
                <p className="plant-scientific-name">
                  {plant?.scientific_name || "Scientific Name Not Available"}
                </p>
                <button
                  onClick={() => removePlant(plant.id)}
                  className="remove-button"
                >
                  Remove Plant
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-plants-message">
            No plants saved yet. Start saving your favorite plants!
          </p>
        )}
      </div>
    </div>
  );
};

export default SavedPlants;
