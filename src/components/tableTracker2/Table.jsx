
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'datatables.net-dt/css/dataTables.dataTables.css';
// import $ from "jquery";

function CovidTable() {
const [data, setData] = useState([]); //creo la constante data para guardar después la información de la API. Fijaros que es un array.
  useEffect(() => { // usamos useEffect para hacer llamadas a funciones, en este caso a una llamada a una api con axios.
    axios.get('https://disease.sh/v3/covid-19/countries?sort=cases') // Llamo a la API mediante axios.get (get nos devuelve info ordenada por casos de mayor a menor)
      .then(response => { //entonces
        setData(response.data); //seteamos la info que recuperamos en nuestra variable de data
        //       $(document).ready(function(){
        //       $('#example').DataTable({               
        //   });
        // })
      }).catch(error => { 
            console.error('Error al obtener datos de la API:', error);
      });
  }, []);
  return (
    <table id="example" class ="display" cellspacing="0" width="100%"> 
      <thead>
        <tr>
          <th>Flag</th>
          <th>Country</th>
          <th>Cases</th>
          <th>New Cases</th>
          <th>Deaths</th>
          <th>New Deaths</th>
          <th>Recoverd</th>
          <th>Active</th>
          <th>Critical</th>
          <th>Tested</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td><img src={item.countryInfo.flag}/></td>
            <td>{item.country}</td>
            <td>{item.cases}</td>
            <td>{item.todayCases}</td>
            <td>{item.deaths}</td>
            <td>{item.todayDeaths}</td>
            <td>{item.recovered}</td>
            <td>{item.active}</td>
            <td>{item.critical}</td>
            <td>{item.tests}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

};
export default CovidTable;
