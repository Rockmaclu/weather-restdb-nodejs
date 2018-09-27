const axios = require('axios'); 
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

let config = {
  headers: {
    "Content-Type": "application/json",
    "x-apikey": "5bac97d8bd79880aab0a77a9"
  }
}

let getInfo = async(direccion) =>{

  try{
    let coords = await lugar.getLugarLatLng(direccion);
    let climaResponse = await clima.getClima(coords.lat,coords.lng);

    return climaResponse;

  } catch (e){
    console.log(e);
    return "No se pudo determinar el clima en la ciudad";
  }
}

getInfo(argv.direccion)
  .then(mensaje => 
      (axios.post('https://citywheater-11c8.restdb.io/rest/readings', mensaje, config)
      .then(function (response) {
        console.log("Exito.");
      }))
      .catch(function (error) {
        console.log(error);
      }))
  .catch(e => console.log(e));
