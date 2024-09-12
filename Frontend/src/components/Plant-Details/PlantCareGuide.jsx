import React from "react";

const PlantCareCard = ({ title, icon, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Icon and Title */}
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Read More Button */}
      <button className="text-green-500 font-semibold border border-green-500 rounded-full py-2 px-4 hover:bg-green-50 transition duration-300">
        Read More
      </button>
    </div>
  );
};

const PlantCareGuide = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <PlantCareCard
        title="Watering"
        icon="💧"
        description="Noble Fir (Abies procera) should be watered moderately and regularly, with an approximate frequency of once a week. The amount of water that should be applied should be enough to keep the soil evenly moist but not waterlogged. When watering, ..."
      />
      <PlantCareCard
        title="Sunlight"
        icon="🌞"
        description="Noble Fir plants require full sunlight for much of the day during the peak growing season, which usually occurs during the summer months. Sunlight is essential for proper growth and development of the plant, and this species should be exposed to ..."
      />
      <PlantCareCard
        title="Pruning"
        icon="✂️"
        description="Noble Fir should be pruned in late winter or early spring. Pruning should be minimal, focusing on removing any dead, damaged, or diseased branches. If needed, growing tips can be removed to maintain desired size, shape, and angle of branching. Avoid ..."
      />
      {/* New Section: Medicinal Usage */}
      <PlantCareCard
        title="Medicinal Usage"
        icon="🌿"
        description="The Noble Fir has traditionally been used for various medicinal purposes. The resin of the tree has been used to treat wounds and skin irritations, while tea made from the needles has been used to alleviate respiratory conditions such as coughs and colds. Its essential oils are believed to have antimicrobial properties, which can be beneficial for treating minor infections."
      />
    </div>
  );
};

export default PlantCareGuide;
