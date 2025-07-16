import HomePage from "../HomePage";
import Products from "./Products";

export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="main text-gray-100 p-4 ">
          <div>
            <h1 className="text-4xl font-extrabold md:text-6xl text-white italic">
              Drive Your Dream
            </h1>
            <h2 className="text-lg font-medium  md:text-3xl italic text-gray-300 md:font-bold">
              Find the perfect car of your dream
            </h2>
            <button className=" p-3 mt-10 bg-white">Explore now</button>
          </div>
        </div>
        <div>
          <Products />
        </div>
      </div>
    </>
  );
}
