const ContactForm = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="flex flex-col md:flex-row bg-card dark:bg-card rounded-lg shadow-2xl overflow-hidden w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto self-center gap-0 md:gap-4">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full p-2 md:p-6">
          <h2 className="text-base md:text-2xl font-semibold text-gray-700 text-center">
            Contact Form
          </h2>
          <form className="mt-4">
            <div className="mb-4">
              <label
                className="block text-sm md:text-base text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm md:text-base text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm md:text-base text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 text-primary-foreground py-2 rounded-lg hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Image */}
        <div className="md:w-1/2 w-full h-40 md:h-full">
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
