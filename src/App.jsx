import { useState } from "react";
import Account from "../src/Components/AccountPage/Account";
import Home from "./HomePage";
import AboutUs from "./Components/About.jsx";
import ContactUs from "./Components/Contact.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/LoginPage/LoginPage";
import Signup from "./Components/SignPage/Signup";
import MainPage from "./Components/MainPage.jsx";
import Services from "./Components/Service.jsx";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarDetail from "./Components/CarDetail.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Home />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/car" element={<CarDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
