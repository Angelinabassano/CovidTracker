import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarHome from '../components/navBarHome/NavBarHome'




const Layout = () => {
  return (
    <><NavBarHome> <Outlet/></NavBarHome>
   
    
    </>
  )
}

export default Layout