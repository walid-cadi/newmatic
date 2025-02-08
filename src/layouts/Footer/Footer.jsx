import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { FiMail, FiMapPin } from "react-icons/fi"

const Footer = () => {
    return (
    <>
    <footer className="bg-[#111111] text-white py-10 ">
  <div className="container mx-auto px-5 md:px-10 lg:px-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold">À propos de nous</h3>
        <p className="text-sm mt-3">
        Newmatic propose des solutions de sécurité électronique innovantes pour protéger vos espaces et vos données. Présents dans les principales villes du Maroc, nous mettons la technologie au service de votre tranquillité.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Entrer en contact</h3>
        <p className="text-sm mt-3">4, rue Abdellah Al Haddaoui, Boulevard Tantan – Bourgogne</p>
        <p className="text-sm mt-3">+212 5 22 95 00 01</p>
        <p className="text-sm">+212 5 22 36 80 42</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Pages principales</h3>
        <ul className="text-sm mt-3 space-y-2">
          <li><a href="#" className="hover:underline">Accueil</a></li>
          <li><a href="#" className="hover:underline">A propos de nous</a></li>
          <li><a href="#" className="hover:underline">Références</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Recevoir la newsletter</h3>
        {/* <p className="text-sm mt-3">Sign up today for hints, tips &amp; the latest product news</p> */}
        <div className="mt-3 flex">
          <input type="email" placeholder="Email address" className="px-3 py-2 w-full text-black rounded-l-md focus:outline-none" />
          <button className="bg-alpha px-4 py-2 rounded-r-md hover:bg-alpha">
            📩
          </button>
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://web.facebook.com/newmaticma/?locale=fr_FR&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><FiFacebook /></a>
          <a href="https://www.instagram.com/newmatic_sarl/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><FiInstagram /></a>
          <a href="https://www.linkedin.com/company/newmaticcasa/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><FiLinkedin /></a>
          <a href="https://youtube.com/@newmatic-sarl?si=JAGr1FvD7aHg7azV" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400"><FiYoutube /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center mt-10">
    <a href="#" className="inline-block bg-alpha px-4 py-2 text-white rounded-md hover:bg-alpha">Retour en haut de la page ⬆</a>
  </div>
        </footer>
        {/* <div className='w-full bg-alpha p-2'>

        </div> */}
        </>
    );
};

export default Footer;