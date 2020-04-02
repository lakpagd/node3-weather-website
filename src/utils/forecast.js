const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ceba6af559bf7199c167ae1a05a5ff5b/' + latitude + ',' + longitude + '?units=si'

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather Services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback (undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' Degree out. There is a '
                + body.currently.precipProbability + '% chance of rain.' + ' Windspeed is ' + body.daily.data[0].windSpeed +
                 'm/sec. Humidity is ' + body.daily.data[0].humidity + '%.')   
        }
    })
}

module.exports = forecast