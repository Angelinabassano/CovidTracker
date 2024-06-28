import React from 'react'
import './App.css'
import NavBarHome from "./components/navBarHome/NavBarHome";
import "./components/navBarHome/navBarHome.css"
import Footer from './components/footerHome/FooterHome';

function App() {   
  return (
    <>
    <div>
         <NavBarHome></NavBarHome>
         <Footer />
    </div>
    </>
  )
}

export default App