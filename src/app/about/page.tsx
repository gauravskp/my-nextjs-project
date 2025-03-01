export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center">
        Welcome to our company! We are dedicated to providing top-notch products and services to our customers.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Our Mission
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our mission is to innovate and provide high-quality solutions that make life easier for our users.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Our Vision
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            We envision a world where technology empowers people to achieve more with efficiency and ease.
          </p>
        </div>
      </div>
    </section>
  );
}
