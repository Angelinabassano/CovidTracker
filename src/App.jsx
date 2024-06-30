
import React from 'react'
import BlueCardHome from './components/blueCardHome/BlueCardHome'
import NavBarHome from './components/navBarHome/NavBarHome'
import SliderCardHome from './components/slideCardsHome/SlideCardHome'
import Footer from './components/footerHome/FooterHome' 
import CovidTable from './components/tableTracker2/Table';
import Sidebar from './components/sideBar/SidebarLateral'
import GetData from './components/top10Tracker0/Top10'
import CardCases from './components/cardsColorTracker0/CardCases'
import CardsColor from './components/cardsColorTracker0/CardsColor'

function App() {   
  return (
    <>
    <div>
        {/* <BlueCardHome></BlueCardHome>
        <NavBarHome></NavBarHome>
        <SliderCardHome></SliderCardHome>
        <Footer></Footer>  */}
        <Sidebar/>
        <CardCases/>
        <CardsColor/>
        <GetData/>
        <CovidTable/>   
    </div>
    </>
  )
}


export default App
