import { useState } from 'react';
import logo from "../../assets/images/Design sans titre (43).png"
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white fixed top-0 z-50 w-full py-1 px-7 flex items-center justify-between">
      <img src={logo} width={170} alt="" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center md:gap-x-16  font-semibold">
        <Link to="/"  className=" hover:text-alpha">
          Accueil
        </Link>
        <Link to=""  className=" hover:text-alpha">
        A propos de nous
        </Link>
        <Link to=""  className=" hover:text-alpha">
        Produits
        </Link>
        <Link to=""  className=" hover:text-alpha ">
        Contact
        </Link>
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
          <Link to="/"  className="py-2 hover:text-alpha ">
            Accueil 
          </Link>
          <Link to=""  className="py-2 hover:text-alpha ">
          A propos de nous
          </Link>
          <Link to=""  className="py-2 hover:text-alpha ">
          Produits 
          </Link>
          <Link to=""  className="py-2 hover:text-alpha ">
          Contact
          </Link>
          <button className="bg-alpha text-white py-2 px-2 mx-auto w-[90%]">
            Demander un devis
          </button>
        </div>
      )}
      <div className="hidden md:flex items-center">
        <button className="bg-alpha text-white py-2 px-2">
          Demander un devis
        </button>
      </div>
    </div>
  );
}
