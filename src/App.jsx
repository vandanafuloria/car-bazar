import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "./pages/AccountPage/AccountPage.jsx";
import Home from "./components/Header.jsx";
import AboutUs from "./pages/AboutPage/About.jsx";
import ContactUs from "./pages/ContactPage/Contact.jsx";
import { useLocation } from "react-router-dom";

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/LoginPage/LoginPage.jsx";
import Signup from "./pages/SignPage/Signup.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import Services from "./pages/ServicePage/Service.jsx";
import Profile from "./Pages/ProfilePage/Profile.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetail from "./components/CarDetail.jsx";
import { BASE_URL } from "./utils/constans.js";

function App() {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // Wait before rendering anything
  const location = useLocation();
  useEffect(() => {
    console.log("Running effect");
    const checkAuth = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      console.log({ token });
      console.log("taoken check");
      if (!token) {
        setCheckingAuth(false);
        return;
      }
      console.log("Making api cslal");

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
        console.log({ result });

        if (result.user) {
          setUser(result.user);
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        // localStorage.removeItem("token");
        // sessionStorage.removeItem("token");
      } finally {
        setCheckingAuth(false);
      }
    };

    checkAuth();
  }, []);

  console.log({ user });

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

      {shouldShowHeader && <Home isLoggedIn={!!user} />}
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
