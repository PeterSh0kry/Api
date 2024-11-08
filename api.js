const request = require("request");


const geocode = require("./Data/geocode")
const forcast = require ("./Data/forcaset")

const country = process.argv[2]


geocode( country , (error , data) => {
    console.log(error)
    console.log(data)
    

    forcast(data.latitude,data.longitude,(error , data) => {
        console.log(error)
        console.log(data)
    })
})
