export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Brand */}
          <div>
            <h2 className="text-2xl font-bold">MyLogo</h2>
            <p className="mt-2 text-gray-400">Building a better future with our services.</p>
          </div>
  
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="hover:text-blue-400 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              {[
                { name: "Facebook", url: "#", icon: "📘" },
                { name: "Twitter", url: "#", icon: "🐦" },
                { name: "Instagram", url: "#", icon: "📸" },
                { name: "LinkedIn", url: "#", icon: "🔗" },
              ].map((social) => (
                <a key={social.name} href={social.url} className="text-2xl hover:text-blue-400 transition">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4 text-gray-400">
          &copy; {new Date().getFullYear()} MyLogo. All rights reserved.
        </div>
      </footer>
    );
  }
  