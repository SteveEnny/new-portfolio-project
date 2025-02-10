const ContactForm = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl overflow-hidden w-full">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full p-6">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Contact Form
          </h2>
          <form className="mt-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                // rows=
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/public/contact.jpeg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
