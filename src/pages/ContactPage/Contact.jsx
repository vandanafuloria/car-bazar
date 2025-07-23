export default function ContactUs() {
  return (
    <div className=" contact min-h-screen text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-400 mb-12">
          We'd love to hear from you. Whether you have a question or just want
          to say hello — we're here.
        </p>

        {/* Contact Form */}
        <form className="bg-white text-black rounded-lg w-full shadow-md p-8 space-y-6 md:w-2/4 m-auto">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="2"
              className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:text-white  border transition"
          >
            Send Message
          </button>
        </form>

        {/* Info Section */}
        <div className="mt-6 text-center text-gray-900 w-full font-light text-xl bg-white shadow-md p-8 space-y-6 md:w-2/4 m-auto rounded-2xl ">
          <p className="">📍 Delhi, India</p>
          <p>✉️ support@carbazar.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}
