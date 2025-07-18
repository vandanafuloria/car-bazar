import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constans";
import login from "../../assets/new.svg";
import bg from "../../assets/image.png";
import { Link } from "react-router-dom";

import { validateEmail, validatePassword } from "../../utils/utility";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setSuccess] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // if (!validateEmail(details.email) )
    //   return;

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
          Authentication: "Bearer ",
        },
      });
      const { status } = res;
      const { token } = await res.json(); // store token in local

      if (remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
      setIsSpinner(false);

      if (status === 200) {
        toast.success("Authentication Successful ! Navigating to home page");
        navigate("/");
      } else {
        toast.error("Password or Email not correct");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  function onDetailsChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    console.log("Blur event");
    console.log({ name, value });
    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Centered Card */}
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={bg}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white text-center">Login</h1>
          <p className="text-gray-300 text-center my-3">
            Enter your credentials to access your account
          </p>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setIsSpinner(true);
              handleLogin();
            }}
          >
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-white block mb-1">
                Email
              </label>
              <input
                className="w-full px-3 py-2 rounded bg-white text-black outline-none"
                type="email"
                id="email"
                name="email"
                value={details.email}
                onChange={onDetailsChange}
                onBlur={handleBlur}
                placeholder="Enter Email"
              />
              <p className="text-red-500 text-sm">{emailError}</p>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="text-white block mb-1">
                Password
              </label>
              <input
                className="w-full px-3 py-2 rounded bg-white text-black outline-none"
                type="password"
                id="password"
                name="password"
                value={details.password}
                onChange={onDetailsChange}
                onBlur={handleBlur}
                placeholder="Enter Password"
              />
              <p className="text-red-500 text-sm">{passwordError}</p>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex justify-between text-white text-sm">
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember Me
              </label>
              <a href="#" className="hover:underline text-blue-400">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 relative"
            >
              Login
              {details.email && details.password && isSpinner && (
                <img
                  src={login}
                  alt="spinner"
                  className="absolute right-4 w-6 h-6 animate-spin"
                />
              )}
            </button>

            {/* OR */}
            <div className="text-center text-white">or</div>

            {/* Social Buttons */}
            <div className="flex justify-around">
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 border border-red-500 rounded text-white hover:bg-red-600"
              >
                <FaGoogle /> Google
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 border border-red-500 rounded text-white hover:bg-red-600"
              >
                <SiGmail /> Gmail
              </button>
            </div>

            {/* Sign up Redirect */}
            <p className="text-center text-white mt-4">
              Don't have an account?{" "}
              <span
                type="button"
                className="text-red-400 hover:underline italic p-0 font-extralight "
                onClick={() => navigate("/signup")}
              >
                <Link to="/signup"> Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
