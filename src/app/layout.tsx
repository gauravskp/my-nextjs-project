import "./globals.css";
import NavTab from "./navTab";
import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata for SEO */}
        <title>Platec Industries</title>
        <meta name="description" content="Platec Industries - Leading Industry Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Platec Industries" />
        <meta property="og:description" content="Explore innovative industry solutions with Platec Industries." />
        <meta property="og:url" content="https://platec-industries.vercel.app" />
        <meta property="og:type" content="website" />
      </head>

      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <NavTab />
        <Navbar />
        <main className="flex-grow mt-32">{/* Added margin-top to avoid overlapping */} 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
