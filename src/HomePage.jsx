import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="home sticky top-0 h-25 p-4 z-50 bg-white shadow-md">
        <header className="flex justify-between gap-5 w-full flex-wrap items-center">
          <h1 className="font-bold  ">
            <span className="text-2xl sm:text-4xl ">CAR</span>
            <span className="text-blue-600 text-3xl sm:text-5xl ">Bazar</span>
          </h1>

          {/* Navigation */}
          <nav className="w-full sm:w-1/2 order-3 sm:order-2 mt-1 sm:mt-0">
            <ul className="flex justify-around gap-4 text-gray-200 text-lg font-medium">
              <li className="text-sm">
                <Link to="/">Home</Link>
              </li>
              <li className="text-sm">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-sm">
                <Link to="/services">Service</Link>
              </li>
              <li className="text-sm">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* User Icon */}
          <span className="order-2 sm:order-3 text-2xl text-gray-600 cursor-pointer">
            <FaUser />
          </span>
        </header>
      </div>
    </>
  );
}
