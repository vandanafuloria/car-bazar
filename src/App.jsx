import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../src/Components/AccountPage/Account";
import Home from "./HomePage";
import AboutUs from "./Components/About.jsx";
import ContactUs from "./Components/Contact.jsx";
import { useLocation } from "react-router-dom";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./Components/LoginPage/LoginPage";
import Signup from "./Components/SignPage/Signup";
import MainPage from "./Components/MainPage.jsx";
import Services from "./Components/Service.jsx";
import Profile from "./Profile.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetail from "./Components/CarDetail.jsx";
import { BASE_URL } from "./Components/utils/constans.js";

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // Wait before rendering anything
  const location = useLocation();
  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      console.log(token);
      if (!token) {
        setCheckingAuth(false);
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

        if (result.success) {
          setUser(result.user);
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("Auth check failed:", error.message);
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
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

      {shouldShowHeader && <Home />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/car" element={<CarDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/profile" />}
        />

        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
