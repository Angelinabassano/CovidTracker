import React from 'react'
import BlueCardHome from './components/blueCardHome/BlueCardHome'
import NavBarHome from './components/navBarHome/NavBarHome'
import SliderCardHome from './components/slideCardsHome/SlideCardHome'
import Footer from './components/footerHome/FooterHome'
function App() {   
  return (
    <>
    <div>
        <BlueCardHome></BlueCardHome>
        <NavBarHome></NavBarHome>
        <SliderCardHome></SliderCardHome>
        <Footer></Footer>
    </div>
    </>
  )
}


export default App




// import React from 'react'
// import Tracker1 from './views/tracker 1/Tracker1';

// const App = () => {
//   return (
//     <>
//       <div className="app">
//         <Tracker1/>
//       </div>
//     </>  
//   );
// };

// export default App;


import List from "./components/reusableCardsTracker1/CardDesign.jsx"



export default function App() {
  return (
    <List></List>
  )
}
