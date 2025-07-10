import { SiGmail } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

export default function Signup({ signup, login }) {
  const img =
    "https://motorik.in/cdn/shop/collections/ban1.png?v=1745311178&width=1500";
  return (
    <>
      <div className="flex  m-auto  h-screen">
        {login && (
          <div className="p-5 pt-5 w-full bg-black md:w-1/2">
            <h1 className="text-2xl font-bold text-center text-white">Login</h1>
            <p className="text-gray-300 text-center my-3">
              Enter Your credential to access your account
            </p>
            <form className="bg-gray-400 p-4 w-2/4 m-auto flex flex-col gap-2">
              <fieldset className="m-2">
                <label className="cursor-pointer" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="email"
                  id="email"
                  placeholder="Type Your Email"
                />
                <span>Enter YOur name</span>
              </fieldset>
              <fieldset className="m-2">
                <label className="cursor-pointer" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="password"
                  id="password"
                  placeholder="password"
                />
                <span>enter password</span>
              </fieldset>
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" /> <span>Remember Me </span>
                </div>
                <div>
                  <a href="#">Forget password</a>
                </div>
              </div>
              <button className="bg-red-600 font-semibold text-2xl w-full text-white">
                Login
              </button>

              <div className="text-center">
                <span>or</span>
              </div>
              <div className="flex justify-around">
                <div className="flex items-center gap-1 border border-red-600 p-2 rounded-lg">
                  <span c>
                    <FaGoogle />
                  </span>
                  <span>Google</span>
                </div>
                <div className="flex items-center gap-1 border border-red-600 p-2 rounded-lg">
                  <span>
                    <SiGmail />
                  </span>
                  <span>Gmail</span>
                </div>
              </div>
              <p className="text-center">
                Dont have a account ? <span onClick={signup}>Sign Up</span>
              </p>
            </form>
          </div>
        )}
        {signup && (
          <div className="p-5 pt-5 w-full bg-black md:w-1/2">
            <h1 className="text-2xl font-bold text-center text-white">
              Sign Up
            </h1>
            <p className="text-gray-300 text-center my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>{" "}
            <form className="bg-gray-400 p-4 w-1/2 m-auto  min-w-[800px] flex flex-col gap-2 ">
              <fieldset>
                <label htmlFor="name">First</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">Last</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">Email</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">Age</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">contact</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">password</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>
              <fieldset>
                <label htmlFor="name">confirm password</label>
                <input
                  className="w-full bg-white outline-none p-1"
                  type="text"
                  placeholder="enter your name"
                />
                <span></span>
              </fieldset>

              <button className="bg-red-600 font-semibold text-2xl w-full text-white">
                Sign Up
              </button>

              <p className="text-center">
                Already Have an account ? <span onClick={signup}>Login</span>
              </p>
            </form>
          </div>
        )}

        <div className="img-container hidden md:block w-1/2 h-screen">
          <img className="w-full h-full" src={img} alt="img" />
        </div>
      </div>
    </>
  );
}
