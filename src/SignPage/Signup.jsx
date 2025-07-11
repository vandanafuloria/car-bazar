import { SiGmail } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../LoginPage/LoginPage";
import { BASE_URL } from "../utils/constans";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  validateEmail,
  validateMobile,
  validatePassword,
} from "../utils/utility";

export default function Signup() {
  const signupDetails = {
    first: "",
    last: "",
    contact: "",
    email: "",
    password: "",
    age: "",
    confirm: "",
  };
  //   const [details, setDetails] = useState(loginDetails);
  const [createAccount, setCreateAccount] = useState(signupDetails);
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [MobileError, setMobileError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("");
  const [name, setName] = useState("");
  const [last, setLast] = useState("");

  const img =
    "https://motorik.in/cdn/shop/collections/ban1.png?v=1745311178&width=1500";

  function onCreatingAccountChanges(e) {
    const { name, value } = e.target;
    setCreateAccount((prev) => ({ ...prev, [name]: value }));
  }

  function handleAccountBlur(e) {
    const { name, value } = e.target;

    if (name === "first") {
      if (value == "") {
        setName("Required");
      }
    }

    if (name === "last") {
      if (value == "") {
        setLast("Required");
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }

    if (name === "age") {
      if (value < 18) {
        setAgeError("Your age should be at least 18");
      } else {
        setAgeError("");
      }
    }

    if (name === "contact") {
      if (!validateMobile(value)) {
        setMobileError("Please enter a valid mobile number");
      } else {
        setMobileError("");
      }
    }

    if (name === "password") {
      if (!validatePassword(value)) {
        setPasswordType(
          "Password must be 8+ chars with at least 1 capital, 1 number, and 1 special character"
        );
      } else {
        setPasswordType("");
      }
    }

    if (name === "confirm") {
      if (value !== createAccount.password) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  }

  const handleSignup = async () => {
    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        body: JSON.stringify(createAccount),
        headers: {
          "Content-Type": "application/json",
          Authentication: "Bearer ",
        },
      });
      const { status } = res;
      const resBody = await res.json(); // store token in local

      if (status === 200) {
        console.log("suscces", status);
        toast.success(" Signup Successful ! Navigating to home page");
        navigate("/home");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="flex  m-auto  h-screen">
        <div className="p-5 pt-5 w-full bg-black md:w-1/2">
          <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
          <p className="text-gray-300 text-center my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>{" "}
          <form
            className="bg-gray-400 p-5 w-1/2 m-auto  min-w-[800px] flex flex-col gap-2"
            noValidate
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset>
              <label htmlFor="name">First</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                id="name"
                placeholder="Enter first Name"
                name="first"
                value={createAccount.first}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className="text-red-600 text-sm">{name}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="last">Last</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                id="last"
                name="last"
                placeholder="Enter Last Name"
                value={createAccount.last}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className="text-red-600 text-sm">{last}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                value={createAccount.email}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className=" text-red-500 text-sm">{emailError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="age">Age</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="number"
                placeholder="Enter Age"
                id="age"
                name="age"
                value={createAccount.age}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className=" text-red-500 text-sm">{ageError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="mobile">Mobile</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                id="mobile"
                placeholder="Mobile"
                name="contact"
                value={createAccount.contact}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className=" text-red-500 text-sm">{MobileError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="password">password</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="Password"
                id="password"
                name="password"
                value={createAccount.password}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className="text-sm text-red-500">{passwordType}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirm Password</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="confirm"
                id="confirm"
                placeholder="Confirm Password"
                name="confirm"
                value={createAccount.confirm}
                onChange={(e) => onCreatingAccountChanges(e)}
                onBlur={handleAccountBlur}
              />
              <span className="text-sm text-red-500">{passwordError}</span>
            </fieldset>

            <button
              type="submit"
              className="bg-red-600 font-semibold text-2xl w-full text-white"
              onClick={handleSignup}
            >
              Sign Up
            </button>

            <p className="text-center">
              Already Have an account ?{" "}
              <span
                className="cursor-pointer text-red-500 italic"
                onClick={() => navigate("/Login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>

        <div className="img-container hidden md:block w-1/2 h-screen">
          <img className="w-full h-full" src={img} alt="img" />
        </div>
      </div>
    </>
  );
}
