import { FaUser } from "react-icons/fa";
export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 bg-black bg-opacity-90 h-30 p-4">
        <header className="flex justify-between gap-5 w-full flex-wrap">
          <h1 className="font-bold text-4xl">
            <span>CAR</span>
            <span>Bazar</span>
          </h1>
          <nav className="w-1/2 order-3 sm:order-2">
            <ul className="flex justify-around gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <span className="order-2 sm:order-3">
            <FaUser />
          </span>
        </header>
      </div>
    </>
  );
}
