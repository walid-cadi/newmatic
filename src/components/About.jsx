import React from 'react'
import img1 from "../assets/images/pexels-cottonbro-3205737.jpg"
import img2 from "../assets/images/pexels-asphotograpy-96612.jpg"
import img3 from "../assets/images/pexels-phaeng-_yo-1503481-17440970.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div id="nous" className="px-5 sm:px-10 md:px-20 lg:px-36 py-20 w-full h-auto">
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="w-full flex flex-col md:flex-row items-center md:items-start ">
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-5">
                <img
                    src={img3}
                    className="w-[300px] pb-10 sm:w-[250px] lg:w-[400px]"
                    alt="Surveillance Camera 1"
                />
        </div>

        {/* Text Section */}
        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className=" md:w-[40%] flex flex-col  md:px-8 ">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Obtenez la meilleure vidéo surveillance
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Solutions pour la maison
            </h1>
            <p className="font-semibold pt-5 text-gray-700 leading-relaxed">
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
        </motion.div>
    </motion.div>
</div>

  )
}
