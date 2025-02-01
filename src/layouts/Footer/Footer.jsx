import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FiMail, FiMapPin } from "react-icons/fi"

const Footer = () => {
    return (
        <div className="px-10 md:px-20 lg:px-44 py-16 bg-[#111111] text-white flex flex-col md:flex-row gap-y-10 md:gap-y-0 items-start justify-between">
    {/* Menu Section */}
    <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <ul className="flex flex-col gap-y-2">
            <li>
                <a href="#home" className="hover:text-alpha transition">
                Accueil 
                </a>
            </li>
            <li>
                <a href="#about" className="hover:text-alpha transition">
                A propos de nous
                </a>
            </li>
            <li>
                <a href="#services" className="hover:text-alpha transition">
                Produits 
                </a>
            </li>
            <li>
                <a href="#contact" className="hover:text-alpha transition">
                Contact
                </a>
            </li>
        </ul>
    </div>

    {/* Social Media Section */}
    <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-bold">Follow Us</h2>
        <div className="flex items-center gap-x-4 text-lg">
            <a
                href="https://web.facebook.com/newmaticma/?locale=fr_FR&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-alpha transition"
            >
                <FiFacebook />
            </a>
            <a
                href="https://www.instagram.com/newmatic_sarl/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-alpha transition"
            >
                <FiInstagram />
            </a>
            <a
                href="https://www.linkedin.com/company/newmaticcasa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-alpha transition"
            >
                <FiLinkedin />
            </a>
        </div>
    </div>

    {/* Contact Section */}
    <div className="flex flex-col gap-y-4">
        <h2 className="text-lg font-bold">Contact Us</h2>
        <div className="flex items-center gap-x-3">
            <FiMapPin className="text-xl text-white" />
            <p className="text-sm">
            4, rue Abdellah Al Haddaoui, Boulevard Tantan – Bourgogne
            </p>
        </div>
        <div className="flex items-center gap-x-3">
            <FiMail className="text-xl text-white" />
            <p className="text-sm">contact@newmatic.ma</p>
        </div>
    </div>
</div>
    );
};

export default Footer;