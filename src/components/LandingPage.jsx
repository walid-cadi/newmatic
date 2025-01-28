import React from 'react'

export default function LandingPage() {
  return (
    <div>
        <div className='home w-full h-screen relative flex items-center justify-center'>
            <div className="absolute  bg-[#00000071] w-[100%] h-[100%] "></div>
            <div className='text-white text-center mt-5 text-4xl md:text-6xl font-bold z-10'>
                <h1>Secure Your Family</h1>
                <h1 className='pt-3'>From All Issues</h1>
                <button className='bg-white text-lg font-semibold mt-3 px-7 py-2 text-black'>Our Services</button>
            </div>
        </div>
    </div>
  )
}
