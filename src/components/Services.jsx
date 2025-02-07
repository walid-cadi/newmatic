import { button } from 'framer-motion/client';
import React, { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';



export default function Services() {
    const locations = [
        { 
            city: "Tanger",
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1274220322275!2d-5.7960555!3d35.7722462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b811d258abb11%3A0x9da9485a0baba9fe!2sNewmatic%20Tanger!5e0!3m2!1sfr!2sma!4v1738096559306!5m2!1sfr!2sma",
            phone: "05 39 32 28 25",
            email:"s.achkari@newmatic.ma",
            place:"6, Résidence Zineb, Rue Farazdak – Tanger",
        },
        { 
            city: "Casablanca",
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.180329030399!2d-7.6487442!3d33.60062529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f9378a69b9%3A0xd305f41f076893da!2sNewMatic!5e0!3m2!1sfr!2sma!4v1738096603524!5m2!1sfr!2sma",
            phone: "05 22 95 00 01 - 05 22 36 80 42",
            email:"contact@newmatic.ma",
            place:"4, rue Abdellah Al Haddaoui, Boulevard Tantan – Bourgogne",
        },
        { 
            city: "Marrakech",
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.048241660358!2d-8.014631999999999!3d31.6325295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef18c10b1db5%3A0x741432556eaaa8f3!2sNEW%20MATIC!5e0!3m2!1sfr!2sma!4v1738096657583!5m2!1sfr!2sma",
            phone: "05 24 42 4122",
            email:"t.barchi@newmatic.ma",
            place:"197, Résidence Al Ferdaous Bd Moulay Rachid. Marrakech",
        },
        { 
            city: "Agadir",
            address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7271672527195!2d-9.5824518!3d30.4154818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b650710c6a43%3A0x2d709f8e84a352b0!2sNewmatic%20Agadir!5e0!3m2!1sfr!2sma!4v1738096693896!5m2!1sfr!2sma",
            phone: "05 28 82 09 53",
            email:"ab.iguiji@gmail.com",
            place:"Avenue Almoukawama, Immeuble Hamria 14, N°13, Agadir",
        }
    ];
    const [activeLocation, setActiveLocation] = useState(locations[0]);
  return (
    <div id="services" className="px-5 bg-white py-[15vh] sm:px-10 md:px-20 lg:px-36  w-full h-auto flex flex-col items-center gap-y-7">
    
    <div className="flex flex-col items-center justify-center gap-y-7">
        {/* Location Buttons */}
        <div 
        className="flex flex-col items-center justify-center gap-4">
            <h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                Nos points de vente
            </h1>
            <div className='flex  items-center justify-center gap-x-2 md:gap-x-4'>
                {locations.map((location, index) => (
                    
                    <button
                        key={index}
                        className={`${
                            activeLocation.city === location.city
                                ? "bg-alpha"
                                : "bg-beta"
                        } text-sm md:text-lg font-semibold px-5 py-2 text-white rounded-lg`}
                        onClick={() => setActiveLocation(location)}
                    >
                        {location.city}
                    </button>
                ))}
            </div>
        </div>

        {/* Map and Details Section */}
        <div 
        className="bg-white shadow-lg shadow-gray-400 p-5 w-full md:w-[80vw] lg:w-[80vw] h-auto flex flex-col md:flex-row items-center md:items-start gap-y-5">
            {/* Map */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[60vh]">
                <iframe
                    src={activeLocation.address}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Details */}
            <div className="p-5 w-full md:w-1/2 flex flex-col gap-y-10">
    {/* City Name */}
    <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-alpha">
        {activeLocation.city}
    </h1>

    {/* Phone Section */}
    <div className="flex items-center  gap-x-3">
        <FiPhone className="text-xl text-alpha" />
        <div className="flex flex-col">
            <h2 className="text-sm md:text-base lg:text-xl font-medium text-black font-semibold">
                Téléphone :
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-800">
                {activeLocation.phone}
            </p>
        </div>
    </div>

    {/* Email Section */}
    <div className="flex items-center gap-x-3">
        <FiMail className="text-lg text-alpha" />
        <div className="flex flex-col">
            <h2 className="text-sm md:text-base lg:text-xl font-medium text-black font-semibold">
                Email :
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-800">
                {activeLocation.email}
            </p>
        </div>
    </div>
    {/* adress Section */}
    <div className="flex items-center gap-x-3">
        <FiMapPin className="text-lg text-alpha" />
        <div className="flex flex-col">
            <h2 className="text-sm md:text-base lg:text-xl font-medium text-black font-semibold">
                Adresse :
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-800">
                {activeLocation.place}
            </p>
        </div>
    </div>
</div>
        </div>
    </div>
</div>
 
  )
}
