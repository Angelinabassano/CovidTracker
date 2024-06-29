import React from 'react'
import './App.css'
import NavBarHome from "./components/navBarHome/NavBarHome";
import "./components/navBarHome/navBarHome.css"
import BlueCardHome from './components/blueCardHome/BlueCardHome';
import Footer from './components/footerHome/FooterHome';
import SlideCardHome from "./components/slideCardsHome/SlideCardHome"

function App() {   
  
  return (
    <>
     <div>
         <BlueCardHome />
         <NavBarHome/>
         <SlideCardHome/>
         <Footer/>
     </div>
    </>
  )
}

export default App;
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

//  export default App;

