const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ceba6af559bf7199c167ae1a05a5ff5b/' + latitude + ',' + longitude + '?units=si'

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather Services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            // callback(undefined, {
            //     summary: response.body.daily.data[0].summary,
            //     currentTemp: response.body.currently.temperature,
            //     precipProbability: response.body.currently.precipProbability
            // })

            callback (undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' Degree out. There is a '
                         + body.currently.precipProbability + '% chance of rain.')
            // console.log(body.daily.data[0].summary)
        }
    })

    // request({ url, json: true }, (error, { body }) => {
    //     console.log(body)
    // })
}

module.exports = forecast