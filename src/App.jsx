import { useState } from "react";
import Login from "./SignPage/Signup";

import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [singup, setSignup] = useState(true);
  function toggleSignupLogin() {
    setSignup(true);
    setLogin(false);
    console.log("singing");
  }
  return (
    <>
      {" "}
      <Login login={login} signup={singup} onClick={toggleSignupLogin} />
    </>
  );
}

export default App;
