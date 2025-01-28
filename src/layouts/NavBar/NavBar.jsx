import { useState } from 'react';
import logo from "../../assets/images/Design sans titre (43).png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white fixed top-0 z-50 w-full py-1 px-7 flex items-center justify-between">
      <img src={logo} width={170} alt="" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center md:gap-x-8 lg:gap-x-16 font-semibold">
        <a href="#accueil" className="">
          Accueil
        </a>
        <a href="#nous" className="">
        A propos de nous
        </a>
        <a href="#services" className="">
          Services
        </a>
        <a href="#blogs" className="">
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
          <a href="#accueil" className="py-2">
            Accueil 
          </a>
          <a href="#nous" className="py-2">
          A propos de nous
          </a>
          <a href="#services" className="py-2">
            Services
          </a>
          <a href="#blogs" className="py-2">
            Blogs
          </a>
          <button className="bg-alpha text-white py-3 px-4 mx-auto w-[90%]">
            Demander un devis
          </button>
        </div>
      )}
      <div className="hidden md:flex items-center">
        <button className="bg-alpha text-white py-3 px-4">
          Demander un devis
        </button>
      </div>
    </div>
  );
}
