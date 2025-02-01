import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

export default function LandingPage() {
  return (
    <div id='accueil'>
        <div className='home w-full h-screen relative flex items-center justify-center'>
            <div className="absolute  bg-[#00000024] w-[100%] h-[100%] "></div>
            <div className='text-white text-center mt-5 text-4xl md:text-6xl font-bold z-10'>
                <motion.h1
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >Protégez votre famille
                </motion.h1>
                <motion.h1 
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='pt-3'>De tous les problèmes</motion.h1>
                <motion.button 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='bg-alpha text-lg font-semibold mt-3 px-7 py-2 text-white rounded-lg' >
                  Savoir plus
                  </motion.button>
            </div>
        </div>
    </div>
  )
}
