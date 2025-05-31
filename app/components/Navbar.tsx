import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaUser, FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" backdrop-blur-sm  py-2  text-white fixed w-full z-50">
      <div className=" mx-auto flex items-center justify-between px-6 md:px-10 max-lg:20 xl:px-32 2xl:px-44 ">
        {/* Left - Logo */}
        <Link to="/" className="text-4xl font-bold text-white">
          Stay<span className="text-orange-600">Cation.</span>
        </Link>

        {/* Center - Nav Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="">Home</Link>
          <Link to="/hotels" className="">Hotels</Link>
          <Link to="/experiences" className="">Experiences</Link>
          <Link to="/about" className="">About</Link>
        </div>

        {/* Right - Search, Profile, Login */}
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch />
          <FaRegUser  />
          <button className="px-4 py-1.5 rounded-full bg-black text-sm">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 bg-black/60 backdrop-blur-md py-4 rounded-md">
          <Link to="/" className="block text-white ">Home</Link>
          <Link to="/hotels" className="block text-white ">Hotels</Link>
          <Link to="/experiences" className="block text-white ">Experiences</Link>
          <Link to="/about" className="block text-white ">About</Link>
          <div className="mt-2">
            <div className="relative mb-2">
              <FaSearch />
            </div>
            <div className="flex items-center space-x-4">
              <FaUser  />
              <button className="px-4 py-1.5 rounded-full bg-black text-sm">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

