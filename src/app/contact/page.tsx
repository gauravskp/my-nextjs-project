export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Contact Us Header */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">
          Have questions? We&apos;re here to help! Let&apos;s talk. 😊
        </p>

        <div className="grid max-w-6xl grid-cols-1 mx-auto mt-10 lg:px-8 md:grid-cols-2 md:divide-x">
          {/* Contact Details Section */}
          <div className="py-6 md:py-0 md:px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Reach Out to Us
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We&apos;re happy to hear from you. Let&apos;s start a conversation!
            </p>
            <div className="mt-6 space-y-5">
              <p className="flex items-center text-gray-800 dark:text-gray-300 text-lg">
                📍 <span className="ml-3">Fake address, 9999 City</span>
              </p>
              <p className="flex items-center text-gray-800 dark:text-gray-300 text-lg">
                📞 <span className="ml-3">+1 234 567 890</span>
              </p>
              <p className="flex items-center text-gray-800 dark:text-gray-300 text-lg">
                ✉️ <span className="ml-3">contact@business.com</span>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="flex flex-col py-8 space-y-6 md:py-0 md:px-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition-all duration-300">
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Full Name
              </span>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 block w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Email Address
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Message
              </span>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="mt-2 block w-full px-4 py-3 rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 focus:ring focus:ring-opacity-50 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 hover:shadow-md"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
