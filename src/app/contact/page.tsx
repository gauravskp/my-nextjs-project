export default function ContactPage() {
    return (
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">Have questions? Reach out to us!</p>
        <form className="max-w-lg mx-auto mt-8 p-6 border rounded-lg shadow-md">
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input type="text" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Name" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Email" />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea className="mt-1 p-2 w-full border rounded-md" rows={4} placeholder="Your Message"></textarea>
          </label>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  