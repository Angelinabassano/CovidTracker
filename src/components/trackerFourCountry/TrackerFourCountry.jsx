import React from 'react'
import '../trackerFourCountry/trackerFourContry.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const TrackerFourCountry = () => {
    
       useEffect(()=>{
        
              axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
              .then(respuesta => { 
               ContryData (respuesta.data);
               console.log(respuesta)         })   
      },[]);
  return (
    <>
    <div className='CountryWiseTabs'>
        <p>Covid-19 Country Wise - Tabs</p>
        <div>banderas</div>
         <div>cardsDos</div>

    </div>
{/*     
                  {TContry.map((element, i) =>{
                       return i <= 10 ?(
                        <div key={i}>
                           <div className="TFCountryContainer">
                               <div className="InfoData">
                                  <div className="TF-Flag"><img  src={element.countryInfo.flag}/></div>
                                  <div className="TF-Country"><p>{element.country}</p></div>
                              </div>
                                <div className="TF-ConfirmedCase"><p>{element.cases}</p></div>
                           </div>
                         </div>
                        ): null
                  })
                   } */}
    </>
  )
}

export default TrackerFourCountry
 
  