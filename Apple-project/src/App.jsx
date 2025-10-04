import { useState } from 'react'
import Header from "../src/assets/Components/Header/Header"
import Herrosection from './assets/Components/HerroSection/Herrosection'
import "../src/assets/css/styles.css"
import Iphone11Pro from './assets/Components/Iphone11Pro/Iphone11Pro'
import Iphone11 from './assets/Components/Iphone11/Iphone11'
import Applewatch from './assets/Components/AppleWatch/Applewatch'
import Footer from './assets/Components/Footer/Footer'
function App() {
  return (
    <>
     <Header />
     <Herrosection />
     <Iphone11Pro />
     <Iphone11 />
     <Applewatch />
     <Footer />
    </>
  )
}

export default App
