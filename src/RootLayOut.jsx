import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const RootLayOut = () => {
  return (
    <div className='bg-gray-300'>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut