import React, { useEffect ,useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Analytics from "./Components/Analytics"
import Newsletter from "./Components/Newsletter"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"
import DarkMode from "./Components/DarkMode"


function App() {
  const [theme, setTheme] = useState('light')
  
  useEffect(() => {
    if(theme === 'dark') 
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
    }, [theme])

    const toggleDarkMode = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>
      <DarkMode />
      
    </>
  )
}

export default App
