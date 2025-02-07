import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/references/ref1.jpeg"
import img2 from "../assets/images/references/ref2.jpeg"
import img3 from "../assets/images/references/ref3.jpeg"
import img4 from "../assets/images/references/ref4.jpeg"
import img5 from "../assets/images/references/ref5.jpeg"
import img6 from "../assets/images/references/ref6.jpeg"
import img7 from "../assets/images/references/ref7.jpeg"
import img8 from "../assets/images/references/ref8.jpeg"
import img9 from "../assets/images/references/ref9.jpeg"
import img10 from "../assets/images/references/ref10.jpeg"
import img11 from "../assets/images/references/ref11.jpeg"
import img12 from "../assets/images/references/ref12.jpeg"
import img13 from "../assets/images/references/ref13.jpeg"
import img14 from "../assets/images/references/ref14.jpeg"
import img15 from "../assets/images/references/ref15.jpeg"
import img16 from "../assets/images/references/ref16.jpeg"
import img17 from "../assets/images/references/ref17.jpeg"
import img18 from "../assets/images/references/ref18.jpeg"
import img19 from "../assets/images/references/ref19.jpeg"
import img20 from "../assets/images/references/ref20.jpeg"
import img21 from "../assets/images/references/ref21.jpeg"
import img22 from "../assets/images/references/ref22.jpeg"
import img23 from "../assets/images/references/ref23.jpeg"
import img24 from "../assets/images/references/ref24.jpeg"
import img25 from "../assets/images/references/ref25.jpeg"

export default function LandingPage() {
  const logos = [
    {img:img1},
    {img:img2},
    {img:img3},
    {img:img4},
    {img:img5},
    {img:img6},
    {img:img7},
    {img:img8},
    {img:img9},
    {img:img10},
    {img:img11},
    {img:img12},
    {img:img13},
    {img:img14},
    {img:img15},
    {img:img16},
    {img:img17},
    {img:img18},
    {img:img19},
    {img:img20},
    {img:img21},
    {img:img22},
    {img:img23},
    {img:img24},
    {img:img25},
  ];
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
    <div id='accueil'>
        <div className='home w-full h-screen relative flex items-center justify-center'>
            <div className="absolute  bg-[#0000005b] w-[100%] h-[100%] "></div>
            <div className='text-white text-center mt-5 text-4xl md:text-6xl font-bold z-10'>
                <motion.h1
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                >Votre sérénité
                </motion.h1>
                <motion.h1 
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='pt-3'>notre priorité</motion.h1>
                <motion.button 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='bg-alpha text-lg font-semibold mt-3 px-7 py-2 text-white rounded-lg' >
                  <a href="#about">Savoir plus</a>
                  </motion.button>
            </div>
        </div>
    </div>
    <div className='flex flex-col items-center justify-center gap-y-3'>
      <div className="slider-container w-[95%] mx-auto ">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="slider-item">
              <img className='h-[170px]' src={logo.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}
