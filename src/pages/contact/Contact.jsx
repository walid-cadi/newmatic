import React from 'react'
import Services from '../../components/Services'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='mt-[8vh] flex-col'>
      <div className='contact w-full h-[45vh] relative flex items-center justify-center md:justify-start px-[15vw]'>
        <div className='text-center text-white mt-5 text-4xl md:text-6xl font-bold z-10'>
            <h1>Contact</h1>
        </div>
      </div>
      <div className='p-7 flex items-center justify-center'>
        <form className=' w-full flex flex-col gap-y-5 p-5 '>
          <h1 className='text-4xl font-semibold self-center pb-4'>Prenez contact avec nous</h1>
            <div className='flex flex-col md:flex-row gap-y-5 items-center justify-between gap-x-2'>
                    <input className='p-2 w-full md:w-1/2  border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' type="text" name='firstName' placeholder='Prenom' />
                    <input className='p-2 w-full md:w-1/2  border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' type="text" name='lasttName' placeholder='Nom' />
            </div>
            <input className='p-2  border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' type="text" name='email' placeholder='Email' />
            <div className='flex flex-col md:flex-row gap-y-5 items-center justify-between gap-x-2'>
                    <input className='p-2 w-full md:w-1/2  border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' type="text" name='firstPhone' placeholder='Telephone 1' />
                    <input className='p-2 w-full md:w-1/2  border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' type="text" name='secondPhone' placeholder='Telephone 2' />
            </div>
            <textarea rows={5} className='p-2 border-gray-400 border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-alpha focus:border-alpha ' name='message' placeholder="Message"   />
            <button className='bg-alpha px-4 py-3 text-white text-lg font-semibold rounded-lg'>Envoyer</button>
            <button className='bg-[#25d366] px-4 py-3 text-white text-lg font-semibold rounded-lg flex justify-center'><a href="" className='flex items-center gap-x-2'><FaWhatsapp size={25}/> Contactez-nous via WhatsApp</a></button>
        </form>
      </div>
      <Services/>
      

    </div>
  )
}
