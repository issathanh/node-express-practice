const express = require('express')
const app = express()
const path = require('path')//ensure the path is always correct

//setup static and middleware
app.use(express.static('./public'))

app.get('*', (req, res) => {
    res.status(404).send('resource not found')
})
app.listen('5000', () => {
    console.log('server is listening on port 5000')
})

