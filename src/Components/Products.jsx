import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constans";
import Car from "./Car";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/cars?page=${page}`);
      const result = await res.json();

      const newCars = result.data.cars;

      if (newCars.length === 0) {
        setHasMore(false);
      } else {
        setCars((prev) => [...prev, ...newCars]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Error loading cars:", err.message);
    }

    setLoading(false);
  };

  // ⬇ Trigger fetch when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - 100 &&
        !loading &&
        hasMore
      ) {
        fetchCars();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Available Cars</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Car
            id={car.id}
            image={car.image}
            modelName={car.modelName}
            colors={car.colors}
            brandName={car.brandName}
            avgRating={car.avgRating}
            priceRange={car.priceRange}
            // onClick={handleClickProduct}
          />
        ))}
      </div>

      {loading && (
        <p className="text-center my-4 text-gray-500">Loading more cars...</p>
      )}
      {!hasMore && (
        <p className="text-center my-4 text-gray-500">No more cars to show.</p>
      )}
    </div>
  );
}
