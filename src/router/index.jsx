import {  createBrowserRouter } from "react-router-dom";

import  Tracker1  from "../views/tracker 1/Tracker1.jsx";
import Tracker2   from "../views/tracker2/Tracker2.jsx"

import App from "../App.jsx";


export const router = createBrowserRouter([
       {
      path: "/",
       element: <App/>,
        },
         {
            path: "/Tracker1",
            element: <Tracker1></Tracker1>
             
         },
         {
            path: "/Tracker2",
           element: <Tracker2></Tracker2>
             ,
         }
       
      
     
     
   
 ])


