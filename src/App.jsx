import { useState } from "react";
import Account from "../src/Components/AccountPage/Account";
import Home from "./HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/LoginPage/LoginPage";
import Signup from "./Components/SignPage/Signup";
import MainPage from "./Components/MainPage.jsx";

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
          <Route path="/car" element={<CarDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
