import { useState } from "react";
import Account from "./AccountPage/Account";
import Home from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./SignPage/Signup";
import Login from "./LoginPage/LoginPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
