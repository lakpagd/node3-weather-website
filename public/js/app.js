const weatherForm = document.querySelector('form')
const seachForm = document.querySelector('input')
const messageOne = document.querySelector('#msg-1') // {# for ID, . for CLASS} 
const messageTwo = document.querySelector('#msg-2')



weatherForm.addEventListener('submit', (e) => { // e = event
    e.preventDefault()

    const location = seachForm.value

    if (!location) {
        messageOne.textContent = 'No address found. Please enter address.'
    } else {
        messageOne.textContent = 'Loading Weather App...'
        messageTwo.textContent = ''
        
        // Remove 'http://localhost:3000' Domain Name to run app in Heroku.
        //
        fetch('/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                    
                }

            })
        })
    }
})