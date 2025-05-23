import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Welcome
        </Link>
        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul
          className={`absolute lg:static top-16 right-0 bg-gray-800 lg:bg-transparent w-full lg:w-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-6`}
        >
          <li className="text-center py-2 lg:py-0">
            <Link
              href="/"
              className={`hover:text-amber-500 font-semibold ${
                pathname === "/" ? "text-amber-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link
              href="/about"
              className={`hover:text-amber-500 font-semibold ${
                pathname === "/about" ? "text-amber-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              About Me
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link
              href="/projects"
              className={`hover:text-amber-500 font-semibold ${
                pathname === "/projects" ? "text-amber-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link
              href="/contact"
              className={`hover:text-amber-500 font-semibold ${
                pathname === "/contact" ? "text-amber-600 font-semibold" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}