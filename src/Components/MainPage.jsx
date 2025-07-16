import HomePage from "../HomePage";
import Products from "./Products";

export default function MainPage() {
  return (
    <>
      <div>
        <div className="main-page text-gray-100 p-4 ">
          <div>
            <h1 className="text-4xl font-extrabold md:text-6xl text-black italic">
              Drive Your Dream
            </h1>
            <h2 className="text-2xl font-medium  md:text-3xl italic text-black md:font-bold">
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
