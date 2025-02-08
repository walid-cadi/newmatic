import { useState } from 'react';
import logo from "../../assets/images/Design_sans_titre__43_-removebg-preview.png"
import { Link } from 'react-router-dom';
import { ChevronDown } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { CgMenuGridO } from 'react-icons/cg';
import { useAppContext } from '../../context/contextProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [openMenu,setOpenMenu] = useState(false);

  const { selectedLanguage, changeLanguage } = useAppContext();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <>
    <div className="bg-white fixed top-0 z-20 shadow-md  shadow-gray-400 w-full py-1 px-7 flex items-center justify-between">
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
        Références
        </Link>
        <Link to="/contact"  className=" hover:text-alpha ">
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
        <div className="absolute top-16 left-0 w-full bg-white z-50 text-center flex flex-col items-center gap-y-4 py-4 font-semibold md:hidden">
          <Link to="/"  className="py-2 hover:text-alpha ">
            Accueil 
          </Link>
          <Link to=""  className="py-2 hover:text-alpha ">
          A propos de nous
          </Link>
          <Link to=""  className="py-2 hover:text-alpha ">
           Références 
          </Link>
          <Link to="/contact"  className="py-2 hover:text-alpha ">
          Contact
          </Link>
          <button className="bg-alpha text-white py-2 px-3 mx-auto w-[90%] rounded-lg">
          Obtenir un devis
          </button>
          <div className='flex items-center justify-center gap-x-4 text-alpha pt-3 border-t border-beta w-[90%]'>
            <div className='grid grid-cols-4 gap-2 '>
              <a href="https://web.facebook.com/newmaticma/?locale=fr_FR&_rdc=1&_rdr#" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
                <FaFacebook />
                <p>Facebook</p>
              </a>
              <a href="https://www.instagram.com/newmatic_sarl/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
                <FaInstagram />
                <p>Instagram</p>
              </a>
              <a href="https://www.linkedin.com/company/newmaticcasa/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
                <FaLinkedin />
                <p>Linkedin</p>
              </a>
              <a href="https://youtube.com/@newmatic-sarl?si=JAGr1FvD7aHg7azV" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
                <FaYoutube />
                <p>Youtube</p>
              </a>
              <a href="https://wa.me/+212600962239" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
                <FaWhatsapp />
                <p>Whatsapp</p>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-y-3  text-xl font-semibold'>
            <p>contact@newmatic.ma</p>
            <p>05 22 95 00 01 - 05 22 36 80 42</p>
          </div>
        </div>
      )}
      <div className="hidden md:flex items-center gap-x-4">
        {/* <div className="relative">
          <button
            className="bg-alpha text-white p-2  ml-2 flex items-center gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            langue <ChevronDown size={16} />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
              <ul className="text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">francais</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">englais</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">chin</li>
              </ul>
            </div>
          )}
        </div> */}
        {/* <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select> */}
        <button className="bg-alpha text-white py-2 px-3 rounded-lg">
          <a href="https://wa.me/+212600962239" target='_blank' rel="noopener noreferrer">Obtenir un devis</a>
        </button>
        <button onClick={()=>setOpenMenu(!openMenu)} className='text-3xl hidden md:flex'>
          <CgMenuGridO />
        </button>
      </div>
    </div>
    <div className={`h-full fixed top-0 ${openMenu ? "right-0" : "right-[-700px]"}  w-[25vw] bg-white shadow-md  shadow-gray-500 z-30 flex flex-col justify-between py-7 px-9 duration-500`}>
          <div className='flex items-center justify-between'>
            <img src={logo} width={170} alt="" />
            <button onClick={()=>setOpenMenu(!openMenu)} className='font-sans text-4xl pb-1 text-beta'><IoMdClose /></button>
          </div>
          <div className='flex flex-col gap-y-[6vh] text-alpha text-3xl'>
            <a href="https://web.facebook.com/newmaticma/?locale=fr_FR&_rdc=1&_rdr#" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
              <FaFacebook />
              <p>Facebook</p>
            </a>
            <a href="https://www.instagram.com/newmatic_sarl/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
              <FaInstagram />
              <p>Instagram</p>
            </a>
            <a href="https://www.linkedin.com/company/newmaticcasa/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
              <FaLinkedin />
              <p>Linkedin</p>
            </a>
            <a href="https://youtube.com/@newmatic-sarl?si=JAGr1FvD7aHg7azV" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
              <FaYoutube />
              <p>Youtube</p>
            </a>
            <a href="https://wa.me/+212675246567" target='_blank' rel="noopener noreferrer" className='flex items-center gap-x-2 hover:text-beta duration-200 '>
              <FaWhatsapp />
              <p>Whatsapp</p>
            </a>
          </div>
          <div className='flex flex-col gap-y-3 py-5 border-t border-alpha text-2xl text-alpha font-semibold'>
            <p>contact@newmatic.ma</p>
            <p>+212 5 22 95 00 01</p>
            <p>+212 5 22 36 80 42</p>
          </div>
    </div>
    </>
  );
}
