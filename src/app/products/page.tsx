export default function ProductsPage() {
    return (
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900">Our Products</h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover a range of high-quality products designed to meet your needs.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {["Product 1", "Product 2", "Product 3"].map((product, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">{product}</h2>
              <p className="mt-2 text-gray-600">Description of {product} goes here.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  