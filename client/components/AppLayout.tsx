import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm hover:text-gray-600">
                About us
              </Link>
              <Link to="/" className="text-sm hover:text-gray-600">
                Services
              </Link>
              <Link to="/" className="text-sm hover:text-gray-600">
                Blog
              </Link>
              <div className="relative group">
                <button className="text-sm flex items-center gap-1 hover:text-gray-600">
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex gap-4">
              <Link
                to="/signup"
                className="px-6 py-2 border border-gray-300 text-sm hover:bg-gray-50"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 bg-black text-white text-sm hover:bg-gray-800"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <Link
                to="/"
                className="block text-sm py-2 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/"
                className="block text-sm py-2 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/"
                className="block text-sm py-2 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/"
                className="block text-sm py-2 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <div className="flex gap-3 pt-4">
                <Link
                  to="/signup"
                  className="flex-1 px-4 py-2 border border-gray-300 text-sm text-center hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2 bg-black text-white text-sm text-center hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Logo and Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-4">Logo</h3>
              <p className="text-sm text-gray-600 mb-6">
                Get design insights and industry updates delivered monthly.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 text-sm focus:outline-none"
                />
                <button className="w-full px-4 py-2 bg-black text-white text-sm hover:bg-gray-800">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                We respect your inbox and handle your data with care.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-black">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-black">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-black">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow us */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow us</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a href="https://facebook.com" className="hover:text-black flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center">f</span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" className="hover:text-black flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center">@</span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="hover:text-black flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center">X</span>
                    X
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" className="hover:text-black flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center">in</span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" className="hover:text-black flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center">▶</span>
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p>© 2025 Automotive Design Studio. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="/" className="hover:text-black">
                  Privacy policy
                </a>
                <a href="/" className="hover:text-black">
                  Terms of service
                </a>
                <a href="/" className="hover:text-black">
                  Cookie settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
