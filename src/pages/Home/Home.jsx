import React from 'react'
import NavBar from '../../layouts/NavBar/NavBar'
import LandingPage from '../../components/LandingPage'
export default function Home() {
  return (
    <div className='flex-col '>
        <NavBar />
        <LandingPage/>
    </div>
  )
}
