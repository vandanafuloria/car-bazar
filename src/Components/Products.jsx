import { useEffect, useState } from "react";
import { BASE_URL } from "./utils/constans";
import Car from "./Car";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState("");
  console.log("this is car", car);

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
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchCars();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  useEffect(() => {
    fetchCars();
  }, []);
  const navigate = useNavigate();

  async function handleClickProduct(id) {
    console.log("this is onlcil", id);

    const car = await fetch(`${BASE_URL}/cars/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!car.ok) {
      throw new Error("Failed to fetch car details");
    }
    const result = await car.json();

    console.log(result.data.car);
    setCar(result.data.car);
    navigate("/car", { state: result.data.car });
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Cars</h2>

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
            onClick={handleClickProduct}
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
