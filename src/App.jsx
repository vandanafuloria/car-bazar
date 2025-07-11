import { useState } from "react";
import Account from "./AccountPage/Account";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./SignPage/Signup";
import Login from "./LoginPage/LoginPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
