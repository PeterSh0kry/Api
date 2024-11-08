
const request = require("request");

const forcast = (latitude , longitude , callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=82823c40a52648acb49184315242910&q=" + latitude + "," + longitude
request({url , json: true},(error, response) => {

    if (error){
        callback("error has occured" , undefined)
    }
    else if (response.body.error){
        callback(response.body.error.message , undefined)
    }
    else{
        callback( undefined ,response.body.location.name + " : " + response.body.current.condition.text + " : " + response.body.current.temp_c)
    }  
})
}

module.exports = forcast;

