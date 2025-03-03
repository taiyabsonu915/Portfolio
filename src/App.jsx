import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portFolio'
import Experience from './components/experience'
import Footer from './components/footer'
import Contact from './components/contact'
import { Toaster } from 'react-hot-toast'
//https://clever-chimera-0113f8.netlify.app
function App() {
  return (
   <>
   <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    <Toaster></Toaster>
    </>
  )
}

export default App
