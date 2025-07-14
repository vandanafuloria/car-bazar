import HomePage from "../HomePage";

export default function MainPage() {
  return (
    <>
      <div>
        <HomePage />
        <div className="main-page text-gray-100 p-4 ">
          <div>
            <h1 className="text-4xl font-extrabold md:text-6xl">
              Drive Your Dream
            </h1>
            <h2 className="text-2xl font-medium md:text-3xl">
              Find the perfect car of your dream
            </h2>
            <button className=" p-3 my-4">Explore now</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
