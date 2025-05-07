import React,{useState} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Collections from './components/Collections'
import Footer from './components/Footer'
import {Gents, Ladies} from './data'
import Women from './components/Women'

const MainPage = () => {

  const[gentsFashion, setGentsFashion]=useState(Gents)
  const[womenFashion,setLadiesFashion]=useState(Ladies)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion}/>
      <Women womenFashion={womenFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
