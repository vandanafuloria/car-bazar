import { useLocation } from "react-router-dom";
export default function CarDetail() {
  const { state: car } = useLocation();

  if (!car) {
    return (
      <p className="text-center mt-10">
        Car data not available. Please go back and select a car again.
      </p>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Car Image & Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={car.image}
          alt={car.modelName}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{car.modelName}</h1>
          <p className="text-gray-600 text-lg mb-4">{car.brandName}</p>

          <div className="text-xl font-semibold text-green-600 mb-2">
            ₹{car.priceRange}
          </div>

          <div className="text-yellow-500 font-medium mb-2">
            ⭐ {car.avgRating} ({car.reviewCount} reviews)
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {car.colors.map((color, i) => (
              <span
                key={i}
                title={color}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: mapColor(color) }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Specs Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Key Specifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {Object.entries(car.keySpecifications).map(([key, value]) => (
            <div key={key} className="bg-gray-100 rounded p-3">
              <p className="font-semibold">{key}</p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features, Pros, Cons */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ListCard title="Features" items={car.features} />
        <ListCard title="Pros" items={car.pros} />
        <ListCard title="Cons" items={car.cons} />
      </div>
    </div>
  );
}

// Utility: Color name to actual color
function mapColor(color) {
  const map = {
    Red: "#ef4444",
    Black: "#000000",
    Blue: "#3b82f6",
    White: "#ffffff",
    Silver: "#c0c0c0",
    Grey: "#6b7280",
  };
  return map[color] || "#d1d5db";
}

// Reusable List Card component
function ListCard({ title, items }) {
  return (
    <div className="bg-white border shadow rounded-lg p-5">
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
