import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn }) {
  // console.log(user);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Profile");
  };
  return (
    <>
      <div className="header sticky top-0 px-4 z-50  shadow-md">
        <header className="flex justify-between gap-1 w-full flex-wrap items-center">
          <h1 className="font-bold">
            <span className="text-xl sm:text-3xl text-white">CAR</span>
            <span className="bazar text-2xl sm:text-4xl ">Bazar</span>
          </h1>

          {/* Navigation */}
          <nav className="w-full sm:w-1/2 order-3 sm:order-2 mt-1 sm:mt-0">
            <ul className="flex justify-around gap-4 text-gray-200 text-lg font-medium p-2">
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
          <span
            className="order-2 sm:order-3 text-2xl text-gray-600 cursor-pointer"
            onClick={handleNavigation}
          >
            {isLoggedIn ? (
              <button className="profile text-sm">Profile</button>
            ) : (
              <button className="profile text-lg sm">Login/Signup</button>
            )}
          </span>
        </header>
      </div>
    </>
  );
}
