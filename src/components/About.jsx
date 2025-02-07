import React from 'react'
import img1 from "../assets/images/img1.jpeg"
import img2 from "../assets/images/img2.jpeg"


export default function About() {
  return (
    <div id="about" className="px-5 sm:px-10 md:px-20 lg:px-36 py-20 bg-white w-full h-auto">
        <div 
        className="w-full flex flex-col md:flex-row items-center md:items-start ">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-y-5">
                <img
                    src={img2}
                    className="w-[300px]  sm:w-[250px] lg:w-[400px]"
                    alt="Surveillance Camera 1"
                />
                <img
                    src={img1}
                    className="w-[300px]  sm:w-[250px] lg:w-[400px]"
                    alt="Surveillance Camera 1"
                />
        </div>

        {/* Text Section */}
        <div 
        className="mt-6 md:mt-0 md:w-[45%] flex flex-col  md:px-8 ">
            <h1 className='flex gap-x-3 text-alpha font-semibold mb-4'>A propos de nous <span className='w-10 border-t-2 border-alpha mt-3.5'></span></h1>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            L'Innovation au Service 
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            d'une Sécurité Moderne et Personnalisée
            </h1>
            <p className="font-semibold pt-2 text-gray-700 leading-relaxed text-justify">
                Newmatic est un leader dans le domaine des solutions de sécurité
                électronique, dédié à offrir des technologies innovantes et
                fiables pour répondre aux défis complexes du monde moderne.
                Avec une expertise approfondie et une approche centrée sur le
                client, nous proposons une gamme complète de produits, incluant
                la vidéosurveillance, les alarmes anti-intrusion, le contrôle
                d'accès, et la détection incendie, conçus pour protéger
                efficacement vos espaces, vos biens et vos données sensibles.
                En tant qu’entreprise visionnaire, nous nous appuyons sur des
                standards technologiques élevés et une personnalisation des
                solutions pour garantir une sécurité optimale, adaptée aux
                besoins spécifiques de chaque client. Présents dans les
                principales villes du Maroc – Casablanca, Tanger, Marrakech et
                Agadir – nous combinons proximité et excellence pour établir
                des relations durables avec nos partenaires et clients. Chez
                Newmatic, nous croyons que l’innovation, l’écoute et la rigueur
                sont les piliers d’une sécurité moderne, et nous nous engageons
                à bâtir un avenir où chaque espace est protégé avec intelligence
                et précision.
            </p>
        </div>
    </div>
</div>

  )
}
