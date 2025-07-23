import { useNavigate } from "react-router-dom";
import bg from "../../assets/image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constans";

export default function Profile({ logout }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    toast.success("Logged out successfully!");
    logout();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token =
          localStorage.getItem("token") || sessionStorage.getItem("token");

        const whoami = await fetch(`${BASE_URL}/whoami`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const userInfo = await whoami.json();
        setUser(userInfo.user);
      } catch (err) {
        console.log("error fethching data of user", err);
        toast.error("Error fethching user details");
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Centered Card */}
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={bg}
            alt="Profile Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-gray-300 mb-4">
            Name: {user.first} {user.last}
          </p>
          <p className="text-gray-300 mb-4">Mobile: {user.mobile}</p>
          <p className="text-gray-300 mb-4">Email: {user.email}</p>
          <p className="text-gray-300 mb-4">Age: {user.age}</p>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded font-semibold"
          >
            Logout
          </button>
          <p className="text-center">
            <Link
              to="/"
              className=" inline-flex items-center gap-2 text-red-500 hover:underline"
            >
              Back to Home <FaArrowRight />
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
