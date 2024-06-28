import React from 'react'
import './App.css'
import NavBarHome from "./components/navBarHome/NavBarHome";
import "./components/navBarHome/navBarHome.css"
import BlueCardHome from './components/blueCardHome/BlueCardHome';
import Footer from './components/footerHome/FooterHome';

function App() {   
  return (
    <>
    <div>
         <NavBarHome></NavBarHome>
          <BlueCardHome />
         <Footer />
    </div>
    </>
  )
}


export default App
