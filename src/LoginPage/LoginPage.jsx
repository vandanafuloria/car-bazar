import { useState } from "react";
import { validateEmail } from "../utils/utility";

import { FaGoogle } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const img =
    "https://motorik.in/cdn/shop/collections/ban1.png?v=1745311178&width=1500";
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onDetailsChange(e) {
    const { name, value } = e.target;

    setDetails((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
  }

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
          Authentication: "Bearer ",
        },
      });
      const { status } = res;
      const resBody = await res.json(); // store token in local

      if (status === 200) {
        console.log("Authentication Successful ! Navigating to home page");
      } else {
        console.log("Authentication failed");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const navigate = useNavigate();

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
              placeholder="Type Your Email"
              value={details.email}
              onChange={(e) => onDetailsChange(e)}
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
              placeholder="password"
              value={details.password}
              onChange={(e) => onDetailsChange(e)}
            />
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
            className="bg-red-600 font-semibold text-2xl w-full text-white"
            onClick={handleLogin}
          >
            Login
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
