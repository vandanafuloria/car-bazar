import { useNavigate } from "react-router-dom";
import bg from "../../assets/image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

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
          <p className="text-gray-300 mb-2">Name: Vandana Fuloria</p>
          <p className="text-gray-300 mb-6">Email: vandana@example.com</p>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
