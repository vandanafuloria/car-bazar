import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./pages/AccountPage/AccountPage.jsx";
import Home from "../src/components/Header.jsx";
import AboutUs from "./pages/AboutPage/About.jsx";
import ContactUs from "./pages/ContactPage/Contact.jsx";
import { useLocation } from "react-router-dom";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/LoginPage/LoginPage.jsx";
import Signup from "./pages/SignPage/Signup.jsx";
import MainPage from "../src/pages/Mainpage/MainPage.jsx";
import Services from "./pages/ServicePage/Service.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";

import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetail from "./components/CarDetail.jsx";
import { BASE_URL } from "./utils/constans.js";

function App() {
  // login / signup OR profile
  const [user, setUser] = useState(null); // {name: shubham, last: fuloria}
  const [checkingAuth, setCheckingAuth] = useState(true); // Wait before rendering anything
  // const [status, setStatus] = useState("signup"); //
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*
    USER : Logged In , Not Logged In
  */

  const navigate = useNavigate();

  const handleLogoutStatus = () => {
    setUser(null);
    navigate("/");
  };

  const handleLogin = async (details, isRemember = false) => {
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
      const { token, user: LoggedInUser } = await res.json(); // store token in local

      if (status === 200) {
        if (isRemember) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        setUser(LoggedInUser);
        toast.success("Authentication Successful ! Navigating to home page");
        navigate("/");
      } else {
        toast.error("Password or Email not correct");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const location = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        setCheckingAuth(false);
        // setStatus("signup");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/whoami`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Token invalid or expired");
        }
        const result = await response.json();

        if (result.user) {
          setUser(result.user);
          // setStatus("login");
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        toast.error("Authentication failed");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (checkingAuth) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Checking login status...
      </div>
    );
  }

  const hideHeaderRoutes = ["/login", "/signup", "/profile"];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      <ToastContainer />

      {shouldShowHeader && (
        <Home isLoggedIn={!!user} logout={handleLogoutStatus} />
      )}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/login"
          element={
            !user ? <Login onLogin={handleLogin} /> : <Navigate to="/profile" />
          }
        />

        <Route
          path="/profile"
          element={
            user ? (
              <Profile logout={handleLogoutStatus} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
