function Contact() {
  return (
    <div
      className="container mx-auto py-20 px-4 min-h-screen flex flex-col lg:flex-row justify-between items-center gap-8"
      id="contact"
    >
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2 bg-[#1E2A47] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Just say Hello!</h2>
        <p className="text-white mb-6">Let us know more about you!</p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 rounded-lg bg-[#2C3A5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 rounded-lg bg-[#2C3A5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Mail"
              className="w-1/2 p-3 rounded-lg bg-[#2C3A5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-1/2 p-3 rounded-lg bg-[#2C3A5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-[#2C3A5A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right Section: Contact Information */}
      <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Contact Information</h2>
        <p className="mb-2">77 Baker Street</p>
        <p className="mb-2">Bondowoso, 87655</p>
        <p className="mb-4">Indonesia</p>
        <p className="mb-2">Call Us: +62 81 334 61 00</p>
        <p className="mb-6">We are open from Monday - Friday, 08:00 am - 05:00 pm</p>
        <h3 className="text-xl font-bold text-pink-500 mb-4">Follow Us</h3>
        <div className="flex gap-4 justify-center lg:justify-start">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            Vimeo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;