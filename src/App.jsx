import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Header/Home/Home'
import About from './Components/about/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import Scrollup from './Components/ScrollUp/Scrollup'

function App() {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  )
}

export default App
