import { map } from "jquery";
import React, { Component, useEffect, useState } from "react";



const productSKU = [
  {
    label: '12',
    value: '12',
  },
  {
    label: '14',
    value: '14',
  },
  {
    label: '23',
    value: '23',
  },
  {
    label: '34',
    value: '34',
  },
  {
    label: '33',
    value: '33',
  },
];

const App = () => {
  const APP_ID = "";
  const APP_KEY = "api_key=keyMkzQmGt6McRfgo";
  const APP_URL = "https://api.airtable.com/v0/appq1iro3A2PrbI0S";
  const API_URL = `${APP_URL}/sku?${APP_KEY}`;
  const [skus, setSkus] = useState([]);
  const [orders, setOrders] = useState([]);
  console.log("ORDERS",orders);
  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
   fetch(API_URL)
    .then((resp) => resp.json())
    .then(data => {
      console.log("DATA",data);
     setOrders( data.records );
    }).catch(err => {console.log("error",err)
  });
  }
    
  
// api key para SKUS
//  https://api.airtable.com/v0/appq1iro3A2PrbI0S/sku?api_key=keyMkzQmGt6McRfgo
// fields: ["label", "value"]
//componentDidMount(){
  //fetch('https://api.airtable.com/v0/appq1iro3A2PrbI0S/sku?api_key=keyMkzQmGt6McRfgo')
  //.then((resp) => resp.json())
  //.then(data => {
    //this.setState({orders: data.records });
  //}).catch(err => {
  //});

//}
  
// api key para Ordenes
// fields: ["Numero de Orden", "Nombre", Rut,  "Email", "Telefono", "Dirección", "Comuna", "Región", Valor Orden, "Emisor"]
// https://api.airtable.com/v0/appq1iro3A2PrbI0S/sku?api_key=keyMkzQmGt6McRfgo
 
// api key para Clientes
// fields: ["Cliente", "Nombre Cliente"]
// https://api.airtable.com/v0/appq1iro3A2PrbI0S/sku?api_key=keyMkzQmGt6McRfgo

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1>Ficha Ingreso de Pedidos</h1>
            <h2>Agregar Productos</h2>
            <div className="select-container">
            // llama los datos de airtable.
            <select clas="form-control" id="formControlSelect">
              {orders.map((order) => (
                <option value={order.fields.value}>{order.fields.label}</option>
              ))}
            </select>
            </div>
          </div>
        </div>
      </div>
    )
}
export default App;
