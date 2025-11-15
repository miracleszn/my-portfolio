import {React} from 'react'
import './App.css'
import Navbar from './components/navbar'
import PuzzleDesign from './components/puzzle_design'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/showcase'
import Test from './components/Test'
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