import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee'

const App = () => {
  return (
    <div className=' text-white min-h-screen bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      
    </div>
  )
}

export default App
