const axios = require('axios'); 


const getClima = async(lat , lng) => {

  let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cd096a8fe6fb7d6c2d818d4d50074944`);

  return{
    name : response.data.name,
    temp : response.data.main.temp,
    hum : response.data.main.humidity,
    prss : response.data.main.pressure

  }
}

module.exports = {
  getClima
}
