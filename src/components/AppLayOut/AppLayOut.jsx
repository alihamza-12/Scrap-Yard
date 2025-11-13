import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar'

const AppLayOut = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayOut