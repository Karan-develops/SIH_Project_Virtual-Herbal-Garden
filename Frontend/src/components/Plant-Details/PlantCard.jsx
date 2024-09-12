import React from "react";

const PlantCard = ({ commonName, scientificName, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={imageUrl} // Use the dynamic image URL from props
          alt={commonName}
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{commonName}</h3>
        <p className="text-sm text-green-500 italic">{scientificName}</p>

        {/* Icon Section */}
        <div className="flex space-x-2 mt-2">
          <span className="p-2 bg-blue-100 rounded-full text-blue-500">🌧️</span>
          <span className="p-2 bg-yellow-100 rounded-full text-yellow-500">
            ☀️
          </span>
          <span className="p-2 bg-green-100 rounded-full text-green-500">
            ➕
          </span>
          <span className="p-2 bg-emerald-100 rounded-full text-emerald-500">
            🌲
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
