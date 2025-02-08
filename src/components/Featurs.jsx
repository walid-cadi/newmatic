import React from 'react'
import { PiSecurityCameraFill } from 'react-icons/pi'
import TransText from './TransText'

export default function Featurs() {
  return (
    // <div className='flex flex-col gap-y-5 pt-24'>
    //     <div className='featurs w-full min-h-[85vh]  flex items-start justify-end'>
    //         <div className='flex flex-col items-start gap-y-3 w-[40vw] h-full mt-[15vh] me-[10vw] '>
    //             <div className='pb-6'>
    //                 <p className='text-4xl font-bold'>Opter pour la sécurité et </p>
    //                 <p className='text-4xl font-bold pt-2'>Vous rendre libre</p>
    //             </div>
    //             <div className='grid grid-cols-2 gap-5'>
    //                 <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#e14920" d="M4 7.25A3.25 3.25 0 0 1 7.25 4h33.5a3.25 3.25 0 0 1 0 6.5H7.25A3.25 3.25 0 0 1 4 7.25M24 18.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m0 2.5a6 6 0 1 1 0 12a6 6 0 0 1 0-12m18-8H6v13c0 9.941 8.059 18 18 18s18-8.059 18-18zM13 27c0-6.075 4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11s-11-4.925-11-11"/></svg>                        <p className='font-semibold'>Sécurité avancée 24/7 </p>
    //                 </div>
    //                 <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  viewBox="0 0 26 26"><path fill="#e14920" d="m21.7 6.87l-8.5-3.78a.47.47 0 0 0-.4 0L4.3 6.87a.5.5 0 0 0-.3.45V10c0 4.92 2.94 10.88 8.82 12.94a.56.56 0 0 0 .36 0C19.06 20.88 22 14.92 22 10V7.32a.5.5 0 0 0-.3-.45m-4.012 3.31l-5.28 6.722a.88.88 0 0 1-.636.332l-.052.002a.88.88 0 0 1-.62-.257l-2.72-2.72a.875.875 0 1 1 1.24-1.237l2.022 2.022l4.67-5.945a.876.876 0 0 1 1.377 1.082z"/></svg>
    //                     <p className='font-semibold'>Confidentialité assurée</p>
    //                 </div>
    //                 <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><g fill="none" stroke="#e14920" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M12.512 7.463a6 6 0 1 1-6-6m-6 6h6.923"/><path d="M6.512 1.463a10.36 10.36 0 0 0-2.308 6a10.36 10.36 0 0 0 2.308 6a10.36 10.36 0 0 0 2.142-4.615"/><path d="M7.404 3.97c-.35-.06-.35-.564 0-.625A3.18 3.18 0 0 0 9.963.895l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.65-.003l-.02-.096a3.18 3.18 0 0 0-2.559-2.45Z"/></g></svg>
    //                     <p className='font-semibold'>Surveillance à distance </p>
    //                 </div>
    //                 <div className='flex items-center justify-center gap-x-2 ps-8 p-3 bg-white w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#e14920" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 6v6s0 3 7 3q.888 0 1.631-.06M18 6v6"/><path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m18.666 5.667C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"/><path d="M20.995 17.667h1.671v0c.185 0 .334-.15.334-.334v-1.888m-7.666 4.888C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"/><path d="M17.005 20.333h-1.671v0a.334.334 0 0 0-.334.334v1.888"/></g></svg>
    //                     <p className='font-semibold'>Stockage sécurisé et sauvegarde </p>
    //                 </div>
    //             </div>
    //             <button className="bg-alpha text-white py-2 px-3 rounded-lg self-center me-8 mt-4">
    //                 <a href="https://wa.me/+212600962239" target='_blank' rel="noopener noreferrer">Obtenir un devis</a>
    //             </button>
    //         </div>
    //     </div>
        
    // </div>
    <div className='flex flex-col gap-y-5 pt-24'>
        <div className='featurs w-full min-h-[85vh] py-10 flex flex-col lg:flex-row items-start lg:items-start justify-center lg:justify-end'>
            <div className='flex flex-col items-center md:items-start gap-y-3 w-full lg:w-[40vw] h-full mt-10 lg:mt-[15vh] lg:me-[10vw] px-4 sm:px-8'>
                <div className='pb-6'>
                    <p className='text-3xl text-center md:text-4xl font-bold'>Choisir la sécurité, vivre en toute liberté</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-full md:w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#e14920" d="M4 7.25A3.25 3.25 0 0 1 7.25 4h33.5a3.25 3.25 0 0 1 0 6.5H7.25A3.25 3.25 0 0 1 4 7.25M24 18.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m0 2.5a6 6 0 1 1 0 12a6 6 0 0 1 0-12m18-8H6v13c0 9.941 8.059 18 18 18s18-8.059 18-18zM13 27c0-6.075 4.925-11 11-11s11 4.925 11 11s-4.925 11-11 11s-11-4.925-11-11"/></svg>
                        <p className='font-semibold'>Sécurité avancée 24/7 </p>
                    </div>
                    <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-full md:w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26 26"><path fill="#e14920" d="m21.7 6.87l-8.5-3.78a.47.47 0 0 0-.4 0L4.3 6.87a.5.5 0 0 0-.3.45V10c0 4.92 2.94 10.88 8.82 12.94a.56.56 0 0 0 .36 0C19.06 20.88 22 14.92 22 10V7.32a.5.5 0 0 0-.3-.45m-4.012 3.31l-5.28 6.722a.88.88 0 0 1-.636.332l-.052.002a.88.88 0 0 1-.62-.257l-2.72-2.72a.875.875 0 1 1 1.24-1.237l2.022 2.022l4.67-5.945a.876.876 0 0 1 1.377 1.082z"/></svg>
                        <p className='font-semibold'>Confidentialité assurée</p>
                    </div>
                    <div className='flex items-center justify-center gap-x-2 p-3 bg-white w-full md:w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14"><g fill="none" stroke="#e14920" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M12.512 7.463a6 6 0 1 1-6-6m-6 6h6.923"/><path d="M6.512 1.463a10.36 10.36 0 0 0-2.308 6a10.36 10.36 0 0 0 2.308 6a10.36 10.36 0 0 0 2.142-4.615"/><path d="M7.404 3.97c-.35-.06-.35-.564 0-.625A3.18 3.18 0 0 0 9.963.895l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.65-.003l-.02-.096a3.18 3.18 0 0 0-2.559-2.45Z"/></g></svg>
                        <p className='font-semibold'>Surveillance à distance </p>
                    </div>
                    <div className='flex items-center justify-center gap-x-2 ps-8 p-3 bg-white w-full md:w-[18vw] min-h-[10vh] shadow-lg shadow-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#e14920" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 6v6s0 3 7 3q.888 0 1.631-.06M18 6v6"/><path d="M11 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3m0 18c-7 0-7-3-7-3v-6m18.666 5.667C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"/><path d="M20.995 17.667h1.671v0c.185 0 .334-.15.334-.334v-1.888m-7.666 4.888C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"/><path d="M17.005 20.333h-1.671v0a.334.334 0 0 0-.334.334v1.888"/></g></svg>
                        <p className='font-semibold'>Stockage sécurisé et sauvegarde </p>
                    </div>
                </div>
                <button className="bg-alpha text-white py-2 px-3 rounded-lg self-center lg:self-center mt-6">
                    <a href="https://wa.me/+212600962239" target='_blank' rel="noopener noreferrer">Obtenir un devis</a>
                </button>
            </div>
        </div>
        {/* <h1 className="text-4xl md:text-6xl font-bold  text-balance">
        <TransText
          fr="Le portail vers le monde numérique."
          en="The door to the digital world."
          ar=".بوابة إلى العالم الرقمي"
        />
      </h1> */}
    </div>

  )
}
{/* <div className='flex flex-col items-center gap-y-9'>
            <h1 className='text-4xl font-semibold'>Comment nous travaillons</h1>
            <div className='flex items-center justify-center gap-x-7'>
                <div className='flex flex-col items-center gap-y-2 group  p-4 w-[10vw] min-h-[30vh] hover:scale-110 duration-300 shadow-lg shadow-gray-400'>
                    <h1 className='text-8xl font-bold text-gray-300 group-hover:text-alpha duration-300'>01</h1>
                    <p className='font-semibold text-center'>Vidéo surveillance</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="#e14920" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM4 20v-2h5v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212l9.525 5.5l-6.1 4.55l-1.925-1.1V18q0 .825-.588 1.413T9 20z"/></svg>
                </div>
                <div className='flex flex-col items-center gap-y-2 group  p-4 w-[10vw] min-h-[30vh] hover:scale-110 duration-300 shadow-lg shadow-gray-400'>
                    <h1 className='text-8xl font-bold text-gray-300 group-hover:text-alpha duration-300'>01</h1>
                    <p className='font-semibold text-center'>Alarme anti-intrusion</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="#e14920" d="m17.525 15l-2.175-1.25l3.5-2.6L21 12.4zM4 20v-2h5v-5.95l-3-1.725q-.725-.425-.937-1.212T5.275 7.6l1.5-2.6q.425-.725 1.213-.937t1.512.212l9.525 5.5l-6.1 4.55l-1.925-1.1V18q0 .825-.588 1.413T9 20z"/></svg>
                </div>
            </div>
        </div> */}