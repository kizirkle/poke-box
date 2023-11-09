//requires
const route = require('express').Router();
const fs = require('fs')

route.get('/', (req, res) => {
    console.log('GET homepage');
    res.sendFile(path.join(__dirname, '/public/index.html'))
})