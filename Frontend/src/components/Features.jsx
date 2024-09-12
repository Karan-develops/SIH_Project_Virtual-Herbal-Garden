import React from "react";

const features = [
  {
    title: "Education on Plant Uses",
    description: "Learn about the benefits of various herbs and their uses.",
    icon: "🌿",
  },
  {
    title: "Community Forum",
    description: "Join discussions, share tips, and grow your knowledge.",
    icon: "💬",
  },
];

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
    <span className="text-3xl mr-4">{icon}</span>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
