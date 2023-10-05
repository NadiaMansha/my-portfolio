import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'


export const Layout = () => {
  return (
    <div
    className='layout'
    >
        <Navbar/>
        <Outlet/>
    </div>
  )
}
