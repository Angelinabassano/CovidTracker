import React from 'react'
import Tracker1 from './views/tracker 1/Tracker1';

const App = () => {
  return (
    <>
      <div className="app">
        <Tracker1/>
      </div>
    </>  
  );
};

export default App;


import List from "./components/reusableCardsTracker1/CardDesign.jsx"



export default function App() {
  return (
    <List></List>
  )
}
