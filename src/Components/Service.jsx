import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-black">CarBazar</span>, we
            don’t just help you buy a car — we guide you through every step with
            ease, trust, and expert support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Car Listings"
            desc="Browse thousands of cars across brands, price ranges, and features."
          />
          <ServiceCard
            title="Car Comparison"
            desc="Compare specs, features, and prices to choose your perfect match."
          />
          <ServiceCard
            title="Loan Assistance"
            desc="Get help securing affordable car loans with trusted partners."
          />
          <ServiceCard
            title="Customer Reviews"
            desc="Read honest reviews from verified buyers and real users."
          />
          <ServiceCard
            title="Car Insurance"
            desc="Compare and choose from top insurance providers — all in one place."
          />
          <ServiceCard
            title="Support Team"
            desc="Our team is available 24/7 to help with any queries or issues."
          />
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold mb-2">
            Ready to explore your next ride?
          </h2>
          <li
            href="/cars"
            className="inline-block mt-3 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            <Link to="/">Browse Car</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

// ServiceCard component
function ServiceCard({ title, desc }) {
  return (
    <div className=" card border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition text-center">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
