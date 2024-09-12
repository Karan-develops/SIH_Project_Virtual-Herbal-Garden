import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";

export const PlantDetails = () => {
  const cardContainerRef = useRef(null);
  const [plants, setPlants] = useState([]);
  const cardWidth = 290;
  const gap = 24;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get(
          "https://perenual.com/api/species-list?key=sk-81Qd66df08571566a6667"
        );
        setPlants(response.data.data);
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchPlants();
  }, []);

  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({
      left: -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center">
        Related <span className="text-green-500">Plants</span>
      </h2>

      {/* Left and Right Buttons */}
      <div className="relative mt-5">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
        >
          {/* Left Arrow Icon */}
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Horizontal Scrollable Cards */}
        <div
          className="flex flex-row gap-6 p-5 overflow-hidden"
          ref={cardContainerRef}
          style={{
            width: `calc(${cardWidth * 5}px + ${gap * 4}px)`,
          }}
        >
          {/* Dynamically render PlantCards based on the fetched plant data */}
          {plants.map((plant) => (
            <div key={plant.id} className="w-[280px] flex-shrink-0">
              <PlantCard
                commonName={plant.common_name}
                scientificName={plant.scientific_name}
                imageUrl={
                  plant.default_image
                    ? plant.default_image.medium_url
                    : "placeholder.jpg"
                } // Fallback if no image
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
        >
          {/* Right Arrow Icon */}
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlantDetails;
