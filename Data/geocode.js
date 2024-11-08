
const request = require("request");

const geocode = ( address , callback ) => {
    
    const geocodeUrl= "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoicGV0ZXJzaG9rcnkiLCJhIjoiY20yeDRrMTRkMDExcTJrczF4eHgzYTQ1OSJ9.QhU7AXC-eJCbbtRXqP5PgA"
    
    request({url: geocodeUrl , json: true},(error, response) => {
    
        if (error){
            console.log("unable to connect to server" , undefined)
        }else if (response.body.message){
            callback(response.body.message , undefined)
        }else if (response.body.features.length === 0){
            callback("unable to find location" , undefined)
        }
        else{
            callback(undefined , {

                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1]
            })
        }
    
    })
}
module.exports = geocode;