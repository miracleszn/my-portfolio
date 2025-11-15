import {React} from 'react'
import './App.css'
import Navbar from './components/navbar'

import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'

import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {

  

  return (
    <div className='bg-white dark:bg-[#1A1A18]'>
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      {/* <Test /> */}
      <Footer/>

    </div>
  )
}

export default App