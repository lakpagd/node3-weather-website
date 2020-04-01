console.log('Client side javascript file is loaded.')

// fetch('https://api.darksky.net/forecast/ceba6af559bf7199c167ae1a05a5ff5b/53.3425,-6.26583').then((response) => {
//     response.json().then((data) => {
//         // if (data.error) {
//         //     return console.log(error)
//         // } else {
//         //     console.log(data.latitude)
//         //     // console.log(data.forecast);
            
//         // }
//         console.log(data);
        
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') // # for id, . for class
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => { // e = event
    e.preventDefault()

    const query = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = 'sdf'
})



