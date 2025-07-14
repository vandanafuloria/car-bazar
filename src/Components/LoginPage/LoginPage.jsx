import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constans";
import login from "../../assets/new.svg";

import { validateEmail, validatePassword } from "../utils/utility";

export default function Login() {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setSuccess] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const img =
    "https://motorik.in/cdn/shop/collections/ban1.png?v=1745311178&width=1500";
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
      const resBody = await res.json(); // store token in local
      setIsSpinner(false);

      if (status === 200) {
        toast.success("Authentication Successful ! Navigating to home page");
        navigate("/home");
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

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }

    // if (name === "password") {
    //   if (!validatePassword(value)) {
    //     setPasswordError(
    //       "Password must be 8+ chars with at least 1 capital, 1 number, and 1 special character"
    //     );
    //   } else {
    //     setPasswordError("");
    //   }
    // }
  }

  return (
    <div className="flex  m-auto  h-screen">
      <div className="img-container hidden md:block w-1/2 h-screen">
        <img className="w-full h-full" src={img} alt="img" />
      </div>
      <div className="p-5 pt-5 w-full bg-black md:w-1/2">
        <h1 className="text-2xl font-bold text-center text-white">Login</h1>
        <p className="text-gray-300 text-center my-3">
          Enter Your credential to access your account
        </p>
        <span>
          {/* <ToastContainer position="top-right" autoClose={1000} /> */}
        </span>

        <h3 className="text-red-700 text-center h-5">{loginError}</h3>
        <form
          className="bg-gray-400 p-5 w-2/4 m-auto flex flex-col gap-2"
          noValidate
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="m-2">
            <label className="cursor-pointer" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-white outline-none p-1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={details.email}
              onChange={(e) => onDetailsChange(e)}
              onBlur={handleBlur}
            />
            <span className="text-red-600 text-sm">{emailError}</span>
          </fieldset>
          <fieldset className="m-2">
            <label className="cursor-pointer" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-white outline-none p-1"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={details.password}
              onChange={(e) => onDetailsChange(e)}
              onBlur={handleBlur}
            />
            <span className="text-red-600 text-sm">{passwordError}</span>
          </fieldset>
          <div className="flex justify-between">
            <div>
              <input type="checkbox" />
              <span>Remember Me </span>
            </div>
            <div>
              <a href="#" className="hover:underline hover:text-blue-400">
                Forget password
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="bg-gray-100 font-semibold text-2xl text-white flex justify-center gap-2 relative"
            onClick={() => {
              setIsSpinner(true);
              handleLogin;
            }}
          >
            <span className="text-red-600">Login</span>
            {details.email && details.password && isSpinner && (
              <img
                className="spinner absolute right"
                width="35px"
                src={login}
                alt=""
              />
            )}
          </button>

          <div className="text-center">
            <span>or</span>
          </div>
          <div className="flex justify-around">
            <div className="flex items-center gap-1 border border-red-600 p-2 rounded-lg">
              <span>
                <FaGoogle />
              </span>
              <span>Google</span>
            </div>
            <div className="flex items-center gap-1 border border-red-600 p-2 rounded-lg">
              <span>
                <SiGmail />
              </span>
              <span>Gmail</span>
            </div>
          </div>
          <p className="text-center">
            Dont have a account ?{" "}
            <button
              className="cursor-pointer text-red-500 italic"
              onClick={() => navigate("/Signup")}
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
