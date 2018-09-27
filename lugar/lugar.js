const axios = require('axios'); 


const getLugarLatLng = async(direccion) => {
  let encodedUrl = encodeURI(direccion) // encodeURI se utiliza para escapar a los espacios de la direccion
  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}+CA&key=AIzaSyD5Z9NYEynycmMZ5HajTr45VU88J-rEzG0`);


  if (response.data.status == 'ZERO_RESULTS') {
    throw new Error("No hay resultados obtenidos para esa direccion");
  }

  let localation = response.data.results[0];
  let coords = localation.geometry.location;

  return{
    direccion : localation.formatted_address,
    lat : coords.lat,
    lng : coords.lng
  }
}

module.exports = {
  getLugarLatLng
}
