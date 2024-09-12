// HerbCards.jsx
import React, { useEffect, useState, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the toast styles
import flower from "../../assets/flower.jpeg";
import "./HerbImage.css";

const HerbCards = ({ searchTerm }) => {
  const [plantData, setPlantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const query = searchTerm
        ? `filter=${encodeURIComponent(searchTerm)}`
        : `page=${Math.floor(Math.random() * 100) + 1}`;

      const response = await fetch(
        `http://localhost:5000/api/plants?${query}`,
        { mode: "cors" }
      );
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        setPlantData(data.data);
      } else {
        setPlantData([]);
      }
    } catch (error) {
      console.error("Error fetching plant data:", error);
      setPlantData([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to save plant data to localStorage
  const savePlant = (plant) => {
    const savedPlants = JSON.parse(localStorage.getItem("savedPlants")) || [];
    const isAlreadySaved = savedPlants.some(
      (p) => p.id === plant.id // Assuming each plant has a unique 'id' field
    );

    if (!isAlreadySaved) {
      savedPlants.push(plant);
      localStorage.setItem("savedPlants", JSON.stringify(savedPlants));
      toast.success(`${plant.common_name} has been saved!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.info(`${plant.common_name} is already saved.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="relative">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex flex-wrap justify-around m-16 gap-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : plantData.length > 0 ? (
          plantData.map((plant, index) => (
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
                  onClick={() => savePlant(plant)}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Save Plant
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default HerbCards;
