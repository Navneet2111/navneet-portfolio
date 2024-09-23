import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import {
  DocumentArrowDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "About", target: "aboutUs" },
    { name: "Technology", target: "tech" },
    { name: "Projects", target: "services" },
    { name: "Contact", target: "contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-100 to-gray-200 text-blue-900 z-50 shadow-md">
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-64 h-[24rem] bg-gray-50 rounded-lg text-black transform transition-all duration-700 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 rotate-0 opacity-100 scale-100 origin-left"
            : "-translate-x-full -rotate-12 opacity-0 scale-50 origin-left"
        } md:w-1/3 lg:hidden z-50 shadow-lg`}
      >
        <div className="flex flex-col items-center p-6">
          <div className="self-start mb-6">
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <XMarkIcon
                title="Close"
                className="h-6 w-6 hover:bg-red-500 hover:border-white hover:text-white rounded-md transition duration-300"
              />
            </button>
          </div>
          <div className="flex flex-col space-y-6 w-full text-center -mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-red-500"
                className="py-2 text-lg font-bold text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <nav className="hidden lg:flex bg-white bg-opacity-90 backdrop-blur-md text-blue-900 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
           <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              <img
                src="/img/logo1.png"
                alt="Portfolio Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-red-500"
                className="text-lg font-semibold hover:text-blue-700 transition-transform duration-300 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            <a
              href="/data/Navneet Kumar Rai Resume.pdf"
              download="Navneet Kumar Rai Resume.pdf"
              className="bg-gradient-to-r from-blue-500 to-gray-600 text-white px-4 py-2 rounded-lg flex justify-center items-center hover:scale-105 transform transition duration-300"
            >
              <DocumentArrowDownIcon className="text-white h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      <div className="lg:hidden flex justify-between items-center p-4 bg-white shadow-md">
        <button
          className={`text-gray-700 focus:outline-none transition-transform duration-500 ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="h-8 w-8 hover:text-blue-600 transition duration-300" />
        </button>
        <a
          href="/data/Navneet Kumar Rai Resume.pdf"
          download="Navneet Kumar Rai Resume.pdf"
          className="bg-gradient-to-r from-blue-500 to-gray-600 text-white px-4 py-2 rounded-lg flex justify-center items-center hover:scale-105 transform transition duration-300"
        >
          <DocumentArrowDownIcon className="text-white h-5 w-5 mr-2" />
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default HeaderMain;
