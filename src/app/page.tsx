"use client";

import Link from "next/link";
import AboutPage from "./about/page";
import ProductsPage from "./products/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-gray-900 dark:text-white p-6">
      {/* Hero Section */}
      <section className="max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          We provide the best solutions for your business needs. Explore our services and get started today!
        </p>
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Products
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Fast & Reliable", desc: "Our services are built for speed and reliability." },
          { title: "Secure", desc: "Top-notch security to protect your data." },
          { title: "User-Friendly", desc: "Easy to use and navigate for everyone." },
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{feature.desc}</p>
          </div>
        ))}
      </section>
        <AboutPage/>
                <ProductsPage/>
                <ContactPage/>
    </main>
  );
}
