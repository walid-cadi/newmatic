import React from 'react'
import LandingPage from '../../components/LandingPage'
import About from '../../components/About'
import Services from '../../components/Services'
import Blogs from '../../components/Blogs'
import Video from '../../components/video'
import Valeurs from '../../components/Valeurs'
import Featurs from '../../components/Featurs'
export default function Home() {
  return (
    <div className='flex-col '>
        <LandingPage/>
        <About/>
        <Video/>
        <Valeurs/>
        <Blogs/>
        <Services/>
        <Featurs/>
    </div>
  )
}
