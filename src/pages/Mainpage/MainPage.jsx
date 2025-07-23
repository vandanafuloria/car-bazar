// import HomePage from "../../components/Header";
import Products from "../../components/Products";
import Features from "../../components/Features";

export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <div className="main text-gray-100 p-4 flex flex-col justify-between">
          <div>
            <h1 className="head text-4xl font-extrabold md:text-6xl text-white italic">
              Drive Your Dream
            </h1>
            <h2 className="text-lg font-medium  md:text-3xl italic text-gray-300 md:font-semibold">
              Find the perfect car of your dream
            </h2>
            <button className=" p-3 mt-10 bg-white">Explore now</button>
          </div>
          <div>
            <Features />
          </div>
        </div>

        <div>
          <Products />
        </div>
      </div>
    </>
  );
}
