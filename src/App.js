import React from 'react'
import Gallery from './components/Gallery'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col gap-12 lg:gap-[2rem] font-Roboto'>
      <Header/>
      <AboutMe/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App