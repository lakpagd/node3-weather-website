const request = require('postman-request')

const geocode = (address, callback) => {
    const mapBoxApiKey = 'pk.eyJ1Ijoic2Vhc29udGFtYW5nIiwiYSI6ImNrODR2N3M1NTAwZ3MzZnF2bXBmcjUybnMifQ.cK6k5vfQiTzKCc_fyJFcYQ'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapBoxApiKey

    request({ url, json:true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Geocode services!')
        } else if (body.features.length === 0) {
            callback('No matching address found.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
            // console.log(body.features[0].center[1])
            // console.log(body.features[0].center[0]);
            // console.log(body.features[0].place_name);
            // console.log(body.features[0]);
        }

    })

}

module.exports = geocode
