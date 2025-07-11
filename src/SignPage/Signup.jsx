import { SiGmail } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../LoginPage/LoginPage";
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

  const img =
    "https://motorik.in/cdn/shop/collections/ban1.png?v=1745311178&width=1500";

  function onCreatingAccountChanges(e) {
    const { name, value } = e.target;

    setCreateAccount((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
    }
    if (name === "age") {
      if (value < 18) setAgeError("Your age Should alteast 18");
      else {
        setAgeError("");
      }
    }
    if (name == "contact") {
      if (!validateMobile(value)) {
        setMobileError("Please Enter Valid Mobile number");
      } else {
        setMobileError("");
      }
    }
    if (name == "password") {
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
        setPasswordError("password not matched");
      } else {
        setPasswordError("");
      }
    }
  }

  async function newUser({ createAccount }) {
    // const { first, last, email, age, contact, password } = createAccount;
    console.log(createAccount);

    try {
      const res = await fetch("/signup", {
        method: "POST",
        // body: JSON.stringify({ first, last, email, age, contact, password }),
        headers: {
          "Content-Type": "application/json",
          Authentication: "Bearer ",
        },
      });
      const { status } = res;
      const resBody = await res.json();
      console.log({ status });
      console.log(resBody);
    } catch (err) {
      console.error(err);
    }
  }
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
            onSubmit={() => newUser(createAccount)}
          >
            <fieldset>
              <label htmlFor="name">First</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="enter your name"
                name="first"
                value={createAccount.first}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="name">Last</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                name="last"
                placeholder="enter your name"
                value={createAccount.last}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="name">Email</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="enter your name"
                name="email"
                value={createAccount.email}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
              <span className="text-sm text-red-500">{emailError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="name">Age</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="number"
                placeholder="enter your name"
                name="age"
                value={createAccount.age}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
              <span>{ageError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="name">contact</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="enter your name"
                name="contact"
                value={createAccount.contact}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
              <span>{MobileError}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="name">password</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="text"
                placeholder="enter your name"
                name="password"
                value={createAccount.password}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
              <span>{passwordType}</span>
            </fieldset>
            <fieldset>
              <label htmlFor="name">confirm password</label>
              <input
                className="w-full bg-white outline-none p-1"
                type="password"
                placeholder="enter your name"
                name="confirm"
                value={createAccount.confirm}
                onChange={(e) => onCreatingAccountChanges(e)}
              />
              <span>{passwordError}</span>
            </fieldset>

            <button
              type="submit"
              className="bg-red-600 font-semibold text-2xl w-full text-white"
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
