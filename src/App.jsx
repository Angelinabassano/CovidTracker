
import React from 'react'
import BlueCardHome from './components/blueCardHome/BlueCardHome'
import NavBarHome from './components/navBarHome/NavBarHome'
import SliderCardHome from './components/slideCardsHome/SlideCardHome'
import Footer from './components/footerHome/FooterHome'
import CovidTable from './components/tableTracker2/Table';
function App() {   
  return (
    <>
    <div>
        <BlueCardHome></BlueCardHome>
        <NavBarHome></NavBarHome>
        <SliderCardHome></SliderCardHome>
        <Footer></Footer>
        <CovidTable/>
    </div>
    </>
  )
}


export default App
