import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white fixed top-0 z-50 w-full py-4 px-7 flex items-center justify-between">
      <h1>Logo</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center md:gap-x-8 lg:gap-x-16 font-semibold">
        <a href="#h" className="">
          Home
        </a>
        <a href="#h" className="">
          About
        </a>
        <a href="#h" className="">
          Services
        </a>
        <a href="#h" className="">
          Blogs
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 text-center flex flex-col gap-y-4 py-4 font-semibold md:hidden">
          <a href="#h" className="py-2">
            Home
          </a>
          <a href="#h" className="py-2">
            About
          </a>
          <a href="#h" className="py-2">
            Services
          </a>
          <a href="#h" className="py-2">
            Blogs
          </a>
          <button className="bg-alpha text-white py-4 px-6 mx-auto w-[90%]">
            Make Appointment
          </button>
        </div>
      )}
      <div className="hidden md:flex items-center">
        <button className="bg-alpha text-white py-4 px-6">
          Make Appointment
        </button>
      </div>
    </div>
  );
}
