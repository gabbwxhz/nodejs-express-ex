const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/teste', (req, res) => {
    res.send('Hello World, teste')
})

app.listen(3000, () => console.log(`online - http://localhost:3000`))