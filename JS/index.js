const PORT = 8000

const axios = require("axios").default

const express = require("express")

const app = express()

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
          'x-rapidapi-host': 'random-words5.p.rapidapi.com',
          'x-rapidapi-key': '15c42a7aebmsh6039b743d888b25p105be8jsn1ddc73dd26f8'
        }
      }
      
      axios.request(options).then((response) => {
          console.log(response.data)
      }).catch((error) => {
          console.error(error)
      })
    
} )

app.listen(PORT, () => console.log('server running on port ' + PORT))




