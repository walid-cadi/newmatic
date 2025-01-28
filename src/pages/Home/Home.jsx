import React from 'react'
import NavBar from '../../layouts/NavBar/NavBar'
import LandingPage from '../../components/LandingPage'
import About from '../../components/About'
import Services from '../../components/Services'
import Blogs from '../../components/Blogs'
export default function Home() {
  return (
    <div className='flex-col '>
        <NavBar />
        <LandingPage/>
        <About/>
        <Blogs/>
        <Services/>
    </div>
  )
}
