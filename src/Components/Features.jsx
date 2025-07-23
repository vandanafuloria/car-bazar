import React from "react";

const Features = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Cars Available",
    },
    {
      number: "25,000+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Verified Dealers",
    },
  ];

  return (
    <div className="features flex flex-wrap justify-center gap-2 md:gap-16 py-8 px-4">
      {stats.map((stat, index) => (
        <div key={index} className="text-center px-0.8 py-1 md:p-4">
          <h3 className="text-sm md:text-4xl font-bold text-white mb-2">
            {stat.number}
          </h3>
          <p className="text-gray-200 text-xs md:text-base font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
