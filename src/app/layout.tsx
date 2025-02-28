import "./globals.css";
import NavTab from "./navTab";
import Navbar from "./navbar";
import Footer from "./footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavTab />
        <Navbar />
        <main className="flex-grow">{children}
        
        </main>
        <Footer />
      </body>
    </html>
  );
}
