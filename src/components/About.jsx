import React from 'react'
import img1 from "../assets/images/pexels-cottonbro-3205737.jpg"
import img2 from "../assets/images/pexels-asphotograpy-96612.jpg"

export default function About() {
  return (
    <div id='nous' className='px-36 py-20  w-full h-screen '>
        <div className="w-full h-[100%]  md:flex">
            <div className=" h-[100%] w-[50%] relative">
              <img src={img1} className='w-[250px] hidden lg:flex absolute left-[50%] top-[30%]' alt="" />
              <img src={img2} className='w-[250px] hidden lg:flex absolute left-[17%] top-[5%]  border-white border-[20px]' alt="" />
            </div>
            <div className="h-[100%] w-[50%] flex flex-col p-10">
              <h1 className='text-2xl font-bold'>Obtenez la meilleure vidéo surveillance</h1>
              <h1 className='text-2xl font-bold'>Solutions pour la maison</h1>
              <p className='font-semibold pt-5 text-beta'>
              Newmatic est un leader dans le domaine des solutions de sécurité électronique, dédié à offrir des technologies innovantes et fiables pour répondre aux défis complexes du 
              monde moderne. Avec une expertise approfondie et une approche centrée sur le client, nous proposons une gamme complète de produits,
               incluant la vidéosurveillance, les alarmes anti-intrusion, le contrôle d'accès, et la détection incendie, conçus pour protéger 
               efficacement vos espaces, vos biens et vos données sensibles. En tant qu’entreprise visionnaire, nous nous appuyons sur des standards 
               technologiques élevés et une personnalisation des solutions pour garantir une sécurité optimale, adaptée aux besoins spécifiques de chaque client. Présents dans 
               les principales villes du Maroc – Casablanca, Tanger, Marrakech et Agadir – nous combinons proximité et excellence pour établir des relations durables avec 
               nos partenaires et clients. Chez Newmatic, nous croyons que l’innovation, l’écoute et la rigueur sont les piliers d’une sécurité moderne, 
               et nous nous engageons à bâtir un avenir où chaque espace est protégé avec intelligence et précision.
              </p>
            </div>
        </div>
    </div>
  )
}
