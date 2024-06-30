import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import "datatables.net-bs5";
import "datatables.net-responsive-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./table.css";

function CovidTable() {
const [data, setData] = useState([]); //creo la constante data para guardar después la información de la API. Fijaros que es un array.
  useEffect(() => { // usamos useEffect para hacer llamadas a funciones, en este caso a una llamada a una api con axios
    axios.get("https://disease.sh/v3/covid-19/countries?sort=cases") // Llamo a la API mediante axios.get (get nos devuelve info ordenada por casos de mayor a menor)
        .then(response => { 
          setData(response.data); //seteamos la info que recuperamos en nuestra variable de datos
        if (!$.fn.DataTable.isDataTable("#covidTable")) {   //esto verifica si la tabla CovidTable(id) ha sido convertida en una DataTable, ed que se está aplicando DataTable a mi función
          $("#covidTable").DataTable({ // Si no ha sido inicializada como DataTable, aquí se inicializa.
            data: response.data, // Los datos que se van a mostrar en la tabla.
            columns: [
                {
                data: "countryInfo.flag",
                render: function(data) {
                    return `<img src="${data}" alt="flag" style="width: 30px; height: 20px;"/>`;
                    }
                },
                { data: "country" },
                { data: "cases" },
                { data: "todayCases" },
                { data: "deaths" },
                { data: "todayDeaths" },
                { data: "recovered" },
                { data: "active" },
                { data: "critical" },
                { data: "tests" },
            ],
            responsive: true, // Permite que la tabla sea responsive (adaptable a diferentes tamaños de pantalla).
            destroy: true, // Destruye la tabla existente antes de crear una nueva DataTable.           
            });
        } else {
          const table = $("#covidTable").DataTable(); // Obtiene la referencia a la DataTable existente
          table.clear(); // Limpia todos los datos actuales de la tabla
          table.rows.add(response.data); // Añade los nuevos datos obtenidos de la API
          table.draw(); // Redibuja la tabla con los nuevos datos.
        }
        })
        .catch(error => { 
            console.error("Error al obtener datos de la API:", error);
        });
    }, []);

    return (
        <div className="main-content flex-grow-1 p-3">
                        <h1 className="text-center mb-4">Ajax Data Table - Covid-19 Country Wise State</h1>  
                        <table id="covidTable" className="table table-striped table-bordered dt-responsive nowrap" style={{ width: '100%' }}> 
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
                    </div>
              
    );

}
export default CovidTable;