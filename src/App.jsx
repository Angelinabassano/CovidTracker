import React from 'react';
import Footer from './components/footerHome/FooterHome';
import SlideCardHome from "./components/slideCardsHome/SlideCardHome"

function App() {   
  return (
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

// import List from './components/belowCardsTracker1/BelowCardsList.jsx';


// const App = () => {
//   return (
//     <div className="app">
//       <List />
//     </div>
//   );
// };

// export default App;

