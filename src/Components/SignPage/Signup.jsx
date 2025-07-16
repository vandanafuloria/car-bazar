import { SiGmail } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constans";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  validateEmail,
  validateMobile,
  validatePassword,
} from "../utils/utility";
import img from "../../assets/image.png";

export default function Signup() {
  const [createAccount, setCreateAccount] = useState({
    first: "",
    last: "",
    mobile: "",
    email: "",
    password: "",
    age: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateAccount((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!createAccount.first) newErrors.first = "First name is required";
    if (!createAccount.last) newErrors.last = "Last name is required";
    if (!validateEmail(createAccount.email)) newErrors.email = "Invalid email";
    if (!validateMobile(createAccount.mobile))
      newErrors.mobile = "Invalid mobile number";
    if (createAccount.age < 18) newErrors.age = "Age must be at least 18 years";
    if (!validatePassword(createAccount.password))
      newErrors.password =
        "Password must be 8+ chars with at least 1 capital, 1 number & 1 special char";
    if (createAccount.password !== createAccount.confirm)
      newErrors.confirm = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    switch (name) {
      case "first":
        newErrors.first = value.trim() === "" ? "First name is required" : "";
        break;
      case "last":
        newErrors.last = value.trim() === "" ? "Last name is required" : "";
        break;
      case "email":
        newErrors.email = !validateEmail(value) ? "Invalid email" : "";
        break;
      case "mobile":
        newErrors.mobile = !validateMobile(value)
          ? "Invalid mobile number"
          : "";
        break;
      case "age":
        newErrors.age =
          Number(value) < 18 ? "Age must be at least 18 years" : "";
        break;
      case "password":
        newErrors.password = !validatePassword(value)
          ? "Password must be 8+ chars with 1 capital, 1 number & 1 special char"
          : "";
        break;
      case "confirm":
        newErrors.confirm =
          value !== createAccount.password ? "Passwords do not match" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createAccount),
      });

      const data = await res.json();
      if (res.status === 201) {
        toast.success("Signup successful! Redirecting...");
        navigate("/login");
      } else {
        toast.error(data.error || "Signup failed");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={img}
            alt="Signup Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Sign Up
          </h1>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
          >
            {/* First & Last Name */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-white block mb-1">First Name</label>
                <input
                  name="first"
                  value={createAccount.first}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 rounded  bg-gray-400 text-black outline-none"
                  placeholder="First"
                />
                {errors.first && (
                  <p className="text-sm text-red-500">{errors.first}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="text-white block mb-1">Last Name</label>
                <input
                  name="last"
                  value={createAccount.last}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 rounded  bg-gray-400 text-black outline-none"
                  placeholder="Last"
                />
                {errors.last && (
                  <p className="text-sm text-red-500">{errors.last}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-white block mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={createAccount.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 rounded  bg-gray-400 text-black outline-none"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Mobile and Age */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-white block mb-1">Mobile</label>
                <input
                  name="mobile"
                  value={createAccount.mobile}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded  bg-gray-400 text-black outline-none"
                  placeholder="Mobile"
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>
              <div className="w-1/2">
                <label className="text-white block mb-1">Age</label>
                <input
                  name="age"
                  type="number"
                  value={createAccount.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 rounded  bg-gray-400 text-black outline-none"
                  placeholder="Age"
                />
                {errors.age && (
                  <p className="text-sm text-red-500">{errors.age}</p>
                )}
              </div>
            </div>

            {/* Password */}
            {/* Password */}
            <div className="relative">
              <label className="text-white block mb-1">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={createAccount.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 pr-10 rounded bg-gray-400 text-black outline-none"
                placeholder="Password"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className=" eye absolute top-9 right-0 cursor-pointer text-black"
              >
                {showPassword ? (
                  <FaEyeSlash color="gray" size={20} />
                ) : (
                  <FaEye color="gray" size={20} />
                )}
              </span>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="text-white block mb-1">Confirm Password</label>
              <input
                name="confirm"
                type={showConfirmPassword ? "text" : "password"}
                value={createAccount.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-3 py-2 pr-10 rounded bg-gray-400 text-black outline-none"
                placeholder="Confirm Password"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="eye absolute top-9 right-0 cursor-pointer text-black"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash color="gray" size={20} />
                ) : (
                  <FaEye color="gray" size={20} />
                )}
              </span>
              {errors.confirm && (
                <p className="text-sm text-red-500">{errors.confirm}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
              onClick={handleSignup}
            >
              Create Account
            </button>

            <p className="text-center text-white">
              Already have an account?{" "}
              <span
                className="text-red-400 hover:underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
