
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const cors = require('cors')
const port = 7000

app.use(express.static('build'));
app.use(cors())

app.get('/api', (req, res) => {
  fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(response => response.json())
    .then(response => {
      res.json(response)
    })
    .catch(err => console.log(err))
})

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})


