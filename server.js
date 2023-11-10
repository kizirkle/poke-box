//Includes
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const api = require('./routes/api.js')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

//http routes
app.get('/', (req, res) => {
    console.log('GET homepage');
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.get('/traits', (req, res) => {
    console.log('GET traits');
    res.sendFile(path.join(__dirname, './public/traits/traits.html'));
})

app.get('/items', (req, res) => {
    console.log('GET items');
    res.sendFile(path.join(__dirname, '/public/items/items.html'));
})

app.get('/browse', (req, res) => {
    console.log('GET browse');
    res.sendFile(path.join(__dirname, '/public/browse/browse.html'));
})
app.get('/admin', (req, res) => {
    console.log('GET admin');
    res.sendFile(path.join(__dirname, '/public/admin/admin.html'));
})
//api routes
app.use('/api', api)

//listening in...
app.listen(PORT, () => console.log(`Listening in on ${PORT}!`))