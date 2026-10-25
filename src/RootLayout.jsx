import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout