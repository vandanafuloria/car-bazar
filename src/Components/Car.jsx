import { useNavigate } from "react-router-dom";

export default function Car({
  id,
  image,
  modelName,
  colors,
  brandName,
  avgRating,
  priceRange,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        key={id}
        onClick={() => navigate(`/cars/${id}`)}
        className="car  border rounded-lg p-4 shadow"
      >
        <img
          src={image}
          alt={modelName}
          className=" car-img w-full h-48 object-cover rounded mb-2"
        />
        <h3 className="text-xl font-semibold">{modelName}</h3>
        <p className="text-gray-600">{brandName}</p>
        <p className="text-sm">Price: {priceRange}</p>
        <p className="text-sm">Rating: {avgRating}</p>
        <p className="text-sm text-gray-500">Colors: {colors.join(", ")}</p>
        <button className="btn  w-1/3 m-auto mt-3">Buy Now</button>
      </div>
    </>
  );
}
