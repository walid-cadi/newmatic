import React, { useState } from 'react'
import img1 from "../assets/images/Design sans titre (40).png"
import img2 from "../assets/images/Design sans titre (41).png"
import img3 from "../assets/images/Design sans titre (42).png"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

export default function Blogs() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    {
      id: 1,
      title: "NewMatic Energy",
      description:
        "Pionnier des solutions énergétiques durables, NewMatic Energy accompagne particuliers et entreprises dans leur transition énergétique. Nous proposons des équipements de haute qualité, notamment des panneaux photovoltaïques à haut rendement, des onduleurs intelligents et des variateurs de puissance avancés. Nos solutions sont conçues pour maximiser l'efficacité énergétique tout en respectant l'environnement.",
      img: img1,
    },
    {
      id: 2,
      title: "NewMatic Security",
      description:
        "NewMatic Security est un acteur de confiance dans le domaine de la sécurité électronique, offrant des solutions sur mesure pour protéger efficacement vos espaces résidentiels, commerciaux et industriels. Nous intégrons des technologies de pointe telles que la vidéosurveillance intelligente et les systèmes de contrôle d'accès sécurisés.",
      img: img2,
    },
    {
      id: 3,
      title: "NewMatic Network",
      description:
        "NewMatic Network est spécialisé dans la mise en place de réseaux performants et évolutifs pour les entreprises modernes. Nous déployons des technologies avancées telles que des switches haute capacité et des infrastructures en fibre optique, garantissant une communication rapide et sécurisée.",
      img: img3,
    },
  ];
  return (
    <div
  id="blogs"
  className="px-6 sm:px-10 md:px-20 bg-white lg:px-36 py-10 md:py-20 w-full h-auto flex flex-col items-center gap-y-10"
>
  {/* Section Title */}
  <h1 
  className="text-2xl md:text-4xl font-bold text-center">
    Nos domaines d’expertise
  </h1>

  {/* Cards Container */}
  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="w-full h-auto flex flex-col shadow-lg shadow-gray-400 rounded-lg overflow-hidden">
      <img src={img1} className="w-full h-[200px] md:h-[37%] object-cover" alt="" />
      <div className="p-6">
        <h1 className="text-lg font-bold">NewMatic Energy</h1>
        <p className="line-clamp-6 pt-2 text-sm md:text-base">
          Pionnier des solutions énergétiques durables, NewMatic Energy accompagne particuliers et entreprises dans leur transition énergétique. Nous proposons des équipements de haute qualité, notamment des panneaux photovoltaïques à haut rendement, des onduleurs intelligents et des variateurs de puissance avancés. Nos solutions sont conçues pour maximiser l'efficacité énergétique tout en respectant l'environnement.
        </p>
        <button className="font-semibold flex items-center justify-center gap-x-3 pt-4 text-primary">
          <p className="pb-1">En savoir plus</p>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>

    
    <div className="w-full h-auto flex flex-col shadow-lg shadow-gray-400 rounded-lg overflow-hidden">
      <img src={img2} className="w-full h-[200px] md:h-[37%] object-cover" alt="" />
      <div className="p-6">
        <h1 className="text-lg font-bold">NewMatic Security</h1>
        <p className="line-clamp-6 pt-2 text-sm md:text-base">
          NewMatic Security est un acteur de confiance dans le domaine de la sécurité électronique, offrant des solutions sur mesure pour protéger efficacement vos espaces résidentiels, commerciaux et industriels. Nous intégrons des technologies de pointe telles que la vidéosurveillance intelligente et les systèmes de contrôle d'accès sécurisés.
        </p>
        <button className="font-semibold flex items-center justify-center gap-x-3 pt-4 text-primary">
          <p className="pb-1">En savoir plus</p>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>

    
    <div className="w-full h-auto flex flex-col shadow-lg shadow-gray-400 rounded-lg overflow-hidden">
      <img src={img3} className="w-full h-[200px] md:h-[37%] object-cover" alt="" />
      <div className="p-6">
        <h1 className="text-lg font-bold">NewMatic Network</h1>
        <p className="line-clamp-6 pt-2 text-sm md:text-base">
          NewMatic Network est spécialisé dans la mise en place de réseaux performants et évolutifs pour les entreprises modernes. Nous déployons des technologies avancées telles que des switches haute capacité et des infrastructures en fibre optique, garantissant une communication rapide et sécurisée.
        </p>
        <button className="font-semibold flex items-center justify-center gap-x-3 pt-4 text-primary">
          <p className="pb-1">En savoir plus</p>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  </div> */}
  <div 
  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 `}>
      {cards.map((card) => {
        const isSelected = selectedCard === card.id;
        return (
        <div
          key={card.id}
          className={`w-full ${isSelected ? "md:h-[50vh] flex-col justify-center" : "h-auto"} bg-white  flex flex-col shadow-lg shadow-gray-400 rounded-lg overflow-hidden transition-all duration-500 ${
            selectedCard === null || selectedCard === card.id
              ? "block"
              : "hidden"
          } ${
            selectedCard === card.id
              ? "col-span-1 md:col-span-2 lg:col-span-3"
              : ""
          }`}
        >
          <img
            src={card.img}
            className={`${isSelected ? "md:w-[40%] md:h-[150px] pt-5 mx-auto" : ""} w-full h-[200px] md:min-h-[37%] object-cover`}
            alt=""
          />
          <div className={`${isSelected ? "px-6 pt-0 pb-6": "p-6"}`}>
            <h1 className="text-lg font-bold">{card.title}</h1>
            <p className={` md:line-clamp-6 pt-2 text-sm md:text-base text-justify`}>
              {card.description}
            </p>
              <button
              className={`font-semibold ${isSelected ? "hidden md:flex-row-reverse md:flex" : "hidden md:flex" }  items-center justify-center gap-x-1 pt-4 text-primary`}
              onClick={() =>
                setSelectedCard(selectedCard === card.id ? null : card.id)
              }
            >
              <p className="pb-1">{isSelected ? "retour" : "En savoir plus"}</p>
              {isSelected ? <FaLongArrowAltLeft/> : <FaLongArrowAltRight />}
            </button>
            
          </div>
        </div>
      )})}
    </div>
</div>

  )
}
