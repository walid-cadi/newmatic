import React from 'react'
import img1 from "../assets/images/Design sans titre (40).png"
import img2 from "../assets/images/Design sans titre (41).png"
import img3 from "../assets/images/Design sans titre (42).png"
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Blogs() {
  return (
    <div
  id="blogs"
  className="px-6 sm:px-10 md:px-20 lg:px-36 py-10 md:py-20 w-full h-auto flex flex-col items-center gap-y-10"
>
  {/* Section Title */}
  <h1 className="text-2xl md:text-4xl font-bold text-center">
    Nos domaines d’expertise
  </h1>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
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

    {/* Card 2 */}
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

    {/* Card 3 */}
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
  </div>
</div>

  )
}
