import car from "../../assets/car.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen text-gray-800 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">
          About <span className="text-blue-600">CarBazar</span>
        </h1>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
          Your trusted platform for finding, comparing, and buying the car that
          fits your lifestyle.
        </p>

        {/* Mission / Vision / Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card
            title="Our Mission"
            text="To make car buying easier, transparent, and more informed through technology and trust."
          />
          <Card
            title="Our Vision"
            text="To be India's most reliable, user-first platform for car enthusiasts and buyers alike."
          />
          <Card
            title="Why Choose Us?"
            text="Real reviews, detailed comparisons, modern UI, and a handpicked list of cars you’ll love."
          />
        </div>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className=" w-full md:w-1/2  rounded-lg shadow-md">
            <img className="w-full " src={car} alt="Our Team" />
          </div>

          <div className="md:w-1/2 p-6 align-text-top shadow-md hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-4">Who We Are ? </h2>
            <p className="text-gray-800 font-semibold ">
              Founded by car lovers for car lovers, CarBazar is more than a
              marketplace — it’s a community. Our team is passionate about
              automobiles and driven to deliver a world-class experience for
              every visitor.
            </p>
            <p className="text-blue-600 font-semibold">
              We believe that buying a car should be exciting, transparent, and
              stress-free — and we're here to make that possible.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold mb-2">
            Ready to find your dream car?
          </h3>
          <li className="inline-block px-6 py-3 mt-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <Link to="/"> Browse Cars</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

// Reusable Card component
function Card({ title, text }) {
  return (
    <div className="card bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className=" text-sm">{text}</p>
    </div>
  );
}
