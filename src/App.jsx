import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
import Footer from './components/footer'

import './App.css'

function App() {
  const [darkMode, setdarkMode] = useState(false)
  const [isopen, setisopen] = useState(false)

  const toggleTheme=()=>{
    setdarkMode((prev)=>!prev)
  }

  const togglemenu=()=>{
    setisopen((prev)=>!prev)
  }
  

  return (
    <>
      <div className={`w-[100%] min-h-[100vh] overflow-hidden  bg-white ${darkMode && 'dark'}`}>
        <div className="w-[100%]  min-h-[100vh] bg-white">
        <div className='dark:bg-slate-600 dark:text-white '>
            <div className="min-h-[100vh]">
            <Navbar 
            toggleTheme={toggleTheme}
            darkMode={darkMode}
            togglemenu={togglemenu}
            isopen={isopen}/>
            <Hero/>
            </div>
            <About/>
            <Work/>
            <Contact/>
            <Footer/>

            

          </div>
        </div>
      </div>
    </>
  )
}

export default App
